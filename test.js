// 回归测试：防止 AI 破坏核心碰撞逻辑
function checkCollision(player, asteroid) {
    return Math.hypot(player.x - asteroid.x, player.y - asteroid.y) < (player.size + asteroid.size);
}
function runTests() {
    let p1 = {x: 100, y: 100, size: 10};
    let a1 = {x: 105, y: 105, size: 10};
    console.log("测试1 (正常碰撞):", checkCollision(p1, a1) === true ? "✅ 通过" : "❌ 失败");
    let a2 = {x: 120, y: 120, size: 10};
    console.log("测试2 (边界擦肩):", checkCollision(p1, a2) === false ? "✅ 通过" : "❌ 失败");
}
runTests();
