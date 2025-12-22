<?php
session_start();

// Generate a random number between 1 and 100 if it doesn't exist
if (!isset($_SESSION['number'])) {
    $_SESSION['number'] = rand(1, 100);
}

// Initialize message
$message = "";

// Check if the form is submitted
if (isset($_POST['guess'])) {
    $guess = (int)$_POST['guess'];
    $number = $_SESSION['number'];

    if ($guess < $number) {
        $message = "Too low! Try again.";
    } elseif ($guess > $number) {
        $message = "Too high! Try again.";
    } else {
        $message = "🎉 Congratulations! You guessed it!";
        // Reset the number for a new game
        unset($_SESSION['number']);
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Number Guessing Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        input[type=number] {
            padding: 8px;
            width: 80px;
            font-size: 16px;
        }
        button {
            padding: 8px 12px;
            font-size: 16px;
            cursor: pointer;
        }
        p {
            font-size: 18px;
            color: green;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Guess a number between 1 and 100</h1>

    <form method="post">
        <input type="number" name="guess" min="1" max="100" required>
        <button type="submit">Guess</button>
    </form>

    <p><?php echo $message; ?></p>
</body>
</html>
