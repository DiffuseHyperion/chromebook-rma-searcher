function search() {
    // Declare variables
    var input, filter, allItems, items, item, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    allItems = document.getElementById("items");
    items = allItems.getElementsByClassName('item');

    for (i = 0; i < items.length; i++) {
        item = items[i].getElementsByTagName("h2")[0];
        txtValue = item.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}