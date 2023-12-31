import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value ="";
  
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  //liタグ
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了タグ)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了"
  completeButton.addEventListener("click", () => {
    alert("完了");
  })

   //button(削除タグ)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除"
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTaret = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  })
  
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div)
  console.log(div);

}

document.getElementById("add-button")
.addEventListener("click", () => onClickAdd());
