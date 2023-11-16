process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  var star = "*".repeat(a);
  console.log(`${star}\n`.repeat(b));
});

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     console.log((('*').repeat(a)+`\n`).repeat(b))
// });
//이 식이 좀더 깔끔한듯!
