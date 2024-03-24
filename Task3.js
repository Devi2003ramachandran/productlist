let InventoryList = [];
document.getElementById("addItem").addEventListener("click", () => {
  let inp = document.getElementById("itemName").value;
  document.getElementById("itemName").value = "";
  InventoryList.push(inp);
//   document.getElementById("listOutput").innerHTML = InventoryList;
});

document.getElementById("displayList").addEventListener("click",()=>{
    document.getElementById("listOutput").innerHTML = InventoryList
})
function remove(name) {
  let index = InventoryList.indexOf(name);
  if (index !== -1) {
    items.splice(index, 1);
  } else {
    alert("No Items");
  }
}
let inv=InventoryList()

document.getElementById("removeItem").addEventListener("click", () => {
  let itemName = document.getElementById("itemName").value.trim();
  if (itemName !== "") {
    inv.remove(itemName);
    document.getElementById("itemName").value = "";
  }
});

// function inventoryList() {
//     let items = [];

//     function add(name) {
//         if (!items.includes(name)) {
//             items.push(name);
//             alert("Items is Added")
//         }
//         else{
//             alert("")
//         }
//     }

//     function remove(name) {
//         let index = items.indexOf(name);
//         if (index !== -1) {
//             items.splice(index, 1);
//         }
//         else{
//             alert("No Items")
//         }
//     }

//     function getList() {
//         return items.slice();
//     }

//     return { add, remove, getList };
// }

// let inv = inventoryList();

// document.getElementById("addItem").addEventListener("click",()=>{
//     let itemName = document.getElementById('itemName').value.trim();
//     if (itemName !== '') {
//         inv.add(itemName);
//         document.getElementById('itemName').value = '';
//     }
// });

// document.getElementById("removeItem").addEventListener("click",()=>{
//     let itemName = document.getElementById('itemName').value.trim();
//     if (itemName !== '') {
//         inv.remove(itemName);
//         document.getElementById('itemName').value = '';
//     }
// });

// document.getElementById("displayList").addEventListener("click",()=>{
//     let listOutput = document.getElementById('listOutput');
//     let itemList = inv.getList();
//     if (itemList.length === 0) {
//         listOutput.textContent = 'No Items';
//     } else {
//         listOutput.textContent = itemList.join(',');
//     }
// });
