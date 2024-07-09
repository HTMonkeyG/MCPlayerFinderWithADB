const fmt = require("@htmonkeyg/tformat"),
  cp = require("child_process");

var ADB = cp.spawn(".\\build\\adb.exe", ["shell", "input", "keyevent", "KEYCODE_ENTER"]);

//console.log(ADB)

ADB.stdout.on('data', (data) => {
  //grep.stdin.write(data);
  console.log(data.toString())
});

ADB.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ADB.on('close', (code) => {
  console.log(`process exited with code ${code}`);
});

//ADB.stdin.write(Buffer.from("input keyevent KEYCODE_ENTER"));