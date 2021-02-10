let row=1;

function addPerson () {
    let newPerson = document.getElementById('newName').value;
    let newPrice = document.getElementById('tariff').value;
    if(newPerson !== '' && newPrice !== '') {
        $('#result').before('<tr>\n' +
            '            <td class="personName">' + newPerson + '</td>\n' +
            '            <td class="price">' + newPrice + '</td>\n' +
            '            <td class="timePlane"><input type="number" step="1" min="0" max="12" value="0" id="hourPlan_' + row + '" onchange="editTimePlan(this,' + newPrice + ',' + row + ')"> : ' +
            '               <input type="number" step="15" id="minutePlan_' + row + '" min="0" max="60"  value="0" onchange="editTimePlan(this,' + newPrice + ',' + row + ')"></td>\n' +
            '            <td class="pricePlane" id="pricePlane_' + row + '">0</td>\n' +
            '            <td class="timeFact"><input type="number" step="1" min="0" max="12" value="0" id="hourFact_' + row + '" onchange="editTimePlan(this,' + newPrice + ',' + row + ')"> : ' +
            '               <input type="number" step="15" id="minuteFact_' + row + '" min="0" max="60" value="0" onchange="editTimePlan(this,' + newPrice + ',' + row + ')"></td>\n' +
            '            <td class="priceFact" id="priceFact_' + row + '">0</td>\n' +
            '            <td class="timeSell_' + row + '"></td>\n' +
            '            <td class="priceSell"><input type="value" min="0" value="0"  value="0" id="sellPrice_' + row + '" onchange="editPrice(this,' + newPrice + ',' + row + ')"></td>\n' +
            '        </tr>');

        document.getElementById('newName').value = '';
        document.getElementById('tariff').value = '';
        row++;
    }
}


function editTimePlan(timeP,price,row) {
        if ('hourPlan_'+row === timeP.id) {
            let hour=Number.parseInt(timeP.value*60);
            let minutes = Number.parseInt(document.getElementById("minutePlan_"+row).value);
            if (!minutes) minutes=0;
            let FactPrice = (hour + minutes) * price/60;
            $('#pricePlane_'+row).html(FactPrice);
            //sumPricePlan();
        }
        if ('hourFact_'+row === timeP.id) {
            let hour=Number.parseInt(timeP.value*60);
            let minutes = Number.parseInt(document.getElementById("minuteFact_"+row).value);
            if (!minutes) minutes=0;
            let FactPrice = (hour + minutes) * price/60;
            $('#priceFact_'+row).html(FactPrice);
            //sumPriceFact();
        }
        if ('minutePlan_'+row === timeP.id) {
            let minutes =Number.parseInt(timeP.value);
            let hour = Number.parseInt(document.getElementById('hourPlan_'+row).value) * 60;
            if (!hour) hour=0;
            let FactPrice = (hour + minutes) * price/60;
            $('#pricePlane_'+row).html(FactPrice);
            //sumPricePlan();
        }
        if ('minuteFact_'+row === timeP.id) {
            let minutes =Number.parseInt(timeP.value);
            let hour = Number.parseInt(document.getElementById('hourFact_'+row).value) * 60;
            if (!hour) hour=0;
            let FactPrice = (hour + minutes) * price/60;
            $('#priceFact_'+row).html(FactPrice);
            //sumPriceFact();
        }
    sumPricePlan();
}

function sumPricePlan() {
    let sumPricePlan=0;
    let sumPriceFact=0;
    for (let i=0; i<row;i++) {
        sumPricePlan += Number.parseFloat($('#pricePlane_'+i).text());
        sumPriceFact += Number.parseFloat($('#priceFact_'+i).text());
    }
    $('#sumPlane_0').html(sumPricePlan);
    $('#sumPlane_1').html(sumPriceFact);
}

function editPrice(priceS,price, row) {
    let num = priceS.value/price;
    let hour  =  Math.floor(num);
    num = (num - hour) * 60;
    let minutes = Math.floor(num);
    minutes = minutes<10 ? '0'+minutes : minutes;
    $('.timeSell_'+row).html(hour + ':' + minutes);
}

