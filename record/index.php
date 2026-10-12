<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Max-Age: 86400');

// プリフライトリクエストへの対応
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// POSTリクエストのみ受け付け
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(['success' => false, 'error' => 'Method not allowed']);
	exit;
}

// データベース接続情報
$host = 'mysql80.yu-to-ri.sakura.ne.jp';
$dbname = 'yu-to-ri_idle';
$username = 'yu-to-ri_idle';
$password = 'moftAk-1supqu-tydgun';

try {
	// データベース接続
	$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	// JSONデータの受信とパース
	$input = file_get_contents('php://input');
	$data = json_decode($input, true);
	
	if (!$data) {
		$jsonError = json_last_error_msg();
		http_response_code(400);
		echo json_encode(['success' => false, 'error' => 'Invalid JSON: ' . $jsonError]);
		exit;
	}
	
	// 必須フィールドのチェック
	if (!isset($data['id'])) {
		http_response_code(400);
		echo json_encode(['success' => false, 'error' => 'Missing id field. Received keys: ' . implode(', ', array_keys($data))]);
		exit;
	}
	
	// テーブル作成
	createTables($pdo);
	
	// データの挿入
	insertData($pdo, $data);
	
	echo json_encode(['success' => true]);
	
} catch (Exception $e) {
	http_response_code(500);
	echo json_encode(['success' => false, 'error' => 'Server error']);
}

function createTables($pdo) {
	// worldテーブル作成
	$worldSql = "
		CREATE TABLE IF NOT EXISTS world (
			id VARCHAR(255) PRIMARY KEY,
			information_id VARCHAR(255),
			information_name VARCHAR(500),
			information_explanation VARCHAR(1000),
			information_color VARCHAR(20),
			version INT,
			author VARCHAR(255),
			homepage VARCHAR(500),
			url VARCHAR(500),
			estimatedPlayingTime VARCHAR(100),
			language VARCHAR(10),
			translations BOOLEAN,
			offlineMaxHours INT,
			maxCategoryLevels INT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
	";
	
	// progressテーブル作成
	$progressSql = "
		CREATE TABLE IF NOT EXISTS progress (
			id VARCHAR(255) PRIMARY KEY,
			initializedTime BIGINT,
			commitedTime BIGINT,
			totalLevel INT,
			coin INT,
			language VARCHAR(10),
			openedCount INT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
	";
	
	// navigatorテーブル作成
	$navigatorSql = "
		CREATE TABLE IF NOT EXISTS navigator (
			id VARCHAR(255) PRIMARY KEY,
			os VARCHAR(100),
			browser VARCHAR(100),
			vendor VARCHAR(100),
			model VARCHAR(100),
			type VARCHAR(20),
			language VARCHAR(10),
			screenWidth INT,
			screenHeight INT,
			created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
			updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
		) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
	";
	
	$pdo->exec($worldSql);
	$pdo->exec($progressSql);
	$pdo->exec($navigatorSql);
}

function trimString($str, $maxLength) {
	return $str ? substr($str, 0, $maxLength) : null;
}

function insertData($pdo, $data) {
	$id = $data['id'];
	
	// worldデータの挿入
	if (isset($data['world'])) {
		$world = $data['world'];
		$overview = $world['overview'];
		$general = $world['general'];
		
		$worldSql = "
			REPLACE INTO world (
				id, information_id, information_name, information_explanation, information_color,
				version, author, homepage, url, estimatedPlayingTime,
				language, translations, offlineMaxHours, maxCategoryLevels
			) VALUES (
				:id, :info_id, :info_name, :info_explanation, :info_color,
				:version, :author, :homepage, :url, :estimated_playing_time,
				:language, :translations, :offline_max_hours, :max_category_levels
			)
		";
		
		$stmt = $pdo->prepare($worldSql);
		$stmt->execute([
			':id' => trimString($id, 255),
			':info_id' => trimString($overview['information']['id'] ?? null, 255),
			':info_name' => trimString($overview['information']['name'] ?? null, 500),
			':info_explanation' => trimString($overview['information']['explanation'] ?? null, 1000),
			':info_color' => trimString($overview['information']['color'] ?? null, 20),
			':version' => $overview['version'] ?? null,
			':author' => trimString($overview['author'] ?? null, 255),
			':homepage' => trimString($overview['homepage'] ?? null, 500),
			':url' => trimString($overview['url'] ?? null, 500),
			':estimated_playing_time' => trimString($overview['estimatedPlayingTime'] ?? null, 100),
			':language' => trimString($general['language'] ?? null, 10),
			':translations' => $general['translations'] ?? null,
			':offline_max_hours' => $general['offlineMaxHours'] ?? null,
			':max_category_levels' => $general['maxCategoryLevels'] ?? null
		]);
	}
	
	// progressデータの挿入
	if (isset($data['user']['progress'])) {
		$progress = $data['user']['progress'];
		
		$progressSql = "
			REPLACE INTO progress (
				id, initializedTime, commitedTime, totalLevel, coin, language, openedCount
			) VALUES (
				:id, :initialized_time, :commited_time, :total_level, :coin, :language, :opened_count
			)
		";
		
		$stmt = $pdo->prepare($progressSql);
		$stmt->execute([
			':id' => trimString($id, 255),
			':initialized_time' => $progress['initializedTime'] ?? null,
			':commited_time' => $progress['commitedTime'] ?? null,
			':total_level' => $progress['totalLevel'] ?? null,
			':coin' => $progress['coin'] ?? null,
			':language' => trimString($progress['language'] ?? null, 10),
			':opened_count' => $progress['openedCount'] ?? null
		]);
	}
	
	// navigatorデータの挿入
	if (isset($data['user']['navigator'])) {
		$navigator = $data['user']['navigator'];
		
		$navigatorSql = "
			REPLACE INTO navigator (
				id, os, browser, vendor, model, type, language, screenWidth, screenHeight
			) VALUES (
				:id, :os, :browser, :vendor, :model, :type, :language, :screen_width, :screen_height
			)
		";
		
		$stmt = $pdo->prepare($navigatorSql);
		$stmt->execute([
			':id' => trimString($id, 255),
			':os' => trimString($navigator['os'] ?? null, 100),
			':browser' => trimString($navigator['browser'] ?? null, 100),
			':vendor' => trimString($navigator['vendor'] ?? null, 100),
			':model' => trimString($navigator['model'] ?? null, 100),
			':type' => trimString($navigator['type'] ?? null, 20),
			':language' => trimString($navigator['language'] ?? null, 10),
			':screen_width' => $navigator['screenWidth'] ?? null,
			':screen_height' => $navigator['screenHeight'] ?? null
		]);
	}
}
?>