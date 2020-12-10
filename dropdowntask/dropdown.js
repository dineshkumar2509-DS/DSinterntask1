
// using events
window.onload = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsData = JSON.parse(this.responseText);
            var statesCollections = new Array();
            jsData.states.forEach((item, index) => {
                statesCollections.push(item.state);
                // console.log(item.state);
            });
            var state = document.getElementById("selectstate");
            var district = document.getElementById('selectdistrict');
            statesCollections.forEach((element, index) => {
                var option = document.createElement("option");
                // var optionpara = document.createTextNode(element);
                // var optionparainto = option.appendChild(optionpara)
                // state.appendChild(optionparainto);
                option.text = element;
                option.value = index;
                state.add(option);
            });
            state.onchange = () => {
                district.innerHTML = "";
                var optionVal = state.value;
                var districtCollection = jsData.states[optionVal].districts
                // console.log(districtCollection);
                districtCollection.forEach(element => {
                    var option = document.createElement("option");
                    // var optionpara = document.createTextNode(element);
                    // var optionparainto = option.appendChild(optionpara)
                    // state.appendChild(optionparainto);
                    option.text = element;
                    district.add(option);
                });
            }
        }
    };
    xhttp.open("GET", "statedistrict.json");
    xhttp.send();
}



