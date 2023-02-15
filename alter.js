function changeText()
{
    var items = ["monday","tuesday","wednesday","thursday","friday","saturday", "sunday"];
    var day = new Date().getDay();
    heading.textContent = items[day % items.length]
}
