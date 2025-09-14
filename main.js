// main.js
function createUser() {
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!name || !password) {
        alert("ادخل اسم المستخدم وكلمة السر");
        return;
    }

    alert(`تم إنشاء المستخدم: ${name} (كلمة السر: ${password})`);
    // لاحقًا نضيف هنا إرسال البيانات للسيرفر
}

function transfer() {
    const fromId = document.getElementById("fromId").value;
    const toId = document.getElementById("toId").value;
    const amount = document.getElementById("amount").value;

    if(!fromId || !toId || !amount){
        alert("أكمل جميع الحقول للتحويل");
        return;
    }

    alert(`تم تحويل ${amount} من ${fromId} إلى ${toId}`);
}

function loadLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "";

    // بيانات تجريبية للعرض
    const users = [
        {id: 1, name: "Ali", balance: 500},
        {id: 2, name: "Sara", balance: 300},
        {id: 3, name: "Omar", balance: 700}
    ];

    users.sort((a,b)=>b.balance - a.balance);

    users.forEach(user=>{
        const li = document.createElement("li");
        li.textContent = `ID:${user.id} - ${user.name} - رصيد: ${user.balance}`;
        leaderboard.appendChild(li);
    });
}
