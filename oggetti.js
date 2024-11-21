class hitMusicale {
    constructor(titolo, autore, annoP, url) {
    
        this.titolo = titolo;
        this.autore = autore;
        this.annoP = annoP;
        this.url = url;
    }
    setTitolo() { this.titolo = prompt("inserisci il titolo: "); }
    setAutore() { this.autore = prompt("Inserisci l 'autore: "); }
    setAnnoP() { this.annoP = parseFloat(prompt("Inserisci l'anno di pubblicazione: ")); }
    setUrl() {
        this.url = prompt("Inserisci indirizzo url: ");
    }
    getUrl() {
        return this.url;
    }
    

    getTitolo() { return this.titolo; }  
    getAutore() { return this.autore; } 
    getAnnoP() { return this.annoP; }
  
    }
    
    function rimuovi(ind, lista) {
        let trovato=false;
        for(let i =0; i<lista.length; i++) {
            if(lista[i].getTitolo() == ind) {
                lista.splice(i, 1);
                trovato=true;
            } else {
                console.log("prodotto non trovato\n");
            }
        }
    }
    function stampa(i) {
        console.log(lista[i].getTitolo(), lista[i].getAutore(), lista[i].getAnnoP(), lista[i].getUrl)
        console.log();
    }


window.onload = gestoreLoad;

function gestoreLoad() {


    let lista = [];
let d1 = new hitMusicale("asilo republic", "Vasco Rossi", "1983", '<iframe width="300" height="150" src="https://www.youtube.com/embed/PMWKsbMeLZs?si=xq0uaal4P8ExzXqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
let d2 = new hitMusicale("Gallows Pole", "Led Zeppelin", "1967", '<iframe width="300" height="150" src="https://www.youtube.com/embed/muGN_1N_ykI?si=ImpRuB_1IpJX3D_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
let d3 = new hitMusicale("siamo solo noi", "Vasco Rossi", "1983", '<iframe width="300" height="150" src="https://www.youtube.com/embed/fGNf51h40Z0?si=VXOUkW8OdvLzOdvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
lista.push(d1, d2, d3)
let nodoTab = document.getElementById("tab")

function popolalista() {

    rimuoviFigli(nodoTab)
    for(let i =0; i<lista.length; i++){

        let nodoTr = document.createElement("tr");
        let nodoPos = document.createElement("td");
        nodoPos.textContent = i+1;
        let nodoTitolo = document.createElement("td");
        nodoTitolo.textContent = lista[i].getTitolo();
        let nodoAutore = document.createElement("td");
        nodoAutore.textContent = lista[i].getAutore();
        let nodoAnnoP = document.createElement("td");
        nodoAnnoP.textContent = lista[i].getAnnoP();
        let nodoUrl = document.createElement("td");
        nodoUrl.innerHTML = lista[i].getUrl();
        
        nodoTr.appendChild(nodoPos);
        nodoTr.appendChild(nodoTitolo);
        nodoTr.appendChild(nodoAutore);
        nodoTr.appendChild(nodoAnnoP);
        nodoTr.appendChild(nodoUrl);
        nodoTab.appendChild(nodoTr);
    
    }

}

popolalista();

function rimuoviFigli(nodo) {
    while (nodo.childNodes.length > 0) {
        nodo.removeChild(nodo.firstChild);
    }
}
/*  <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>*/
  let selectElement = document.querySelector('#sel1 select');
  let selectElement2 = document.querySelector('#sel2 select');
  
  function popolaSelect() {

    rimuoviFigli(selectElement);
    rimuoviFigli(selectElement2);

    for (let i = 0; i < lista.length; i++) {
        let hit = lista[i];
        let nodoOption = document.createElement('option');
        nodoOption.value = i;
        nodoOption.textContent = i+1 + " " + lista[i].getTitolo();  
        
        selectElement.appendChild(nodoOption);
    }
    for (let i = 0; i < lista.length; i++) {
        let hit = lista[i];
        let nodoOption1 = document.createElement('option');
        nodoOption1.value = i;  
        nodoOption1.textContent = i+1 + " " + lista[i].getTitolo();
        selectElement2.appendChild(nodoOption1);
    }

    M.FormSelect.init(selectElement);
    M.FormSelect.init(selectElement2);
}
popolaSelect();

let btn = document.getElementById("btn")

btn.onclick = dammi_val

function dammi_val(){

    let l1 = parseInt(document.getElementById("sele1").value);
    let l2 = parseInt(document.getElementById("sele2").value);

    let canz = lista[l2];
    lista[l2]=lista[l1];
    lista[l1] = canz;

    popolalista();
    popolaSelect();


    alert("Ha cambiato pos" + (l1) + " con pos" + (l2) )

}

let btnInp = document.getElementById("btnInp");
btnInp.onclick= aggiungi;

function aggiungi() {

    let titolo = document.getElementById("titolo").value;
    let autore = document.getElementById("autore").value;
    let anno = document.getElementById("anno").value;
    let url = document.getElementById("url").value;
    let posizione = document.getElementById("posizione").value;

    if(posizione > 1 && posizione <lista.length+1) {
        let canz1= new hitMusicale(titolo, autore, anno, url);
        lista[posizione-1] = canz1;
        rimuoviFigli(nodoTab);
        popolalista();
        popolaSelect();
        document.getElementById("titolo").value = "";
        document.getElementById("autore").value = "";
        document.getElementById("anno").value = "";
        document.getElementById("url").value = "";
        document.getElementById("posizione").value = "";

    } else {
        alert("Posizione non valida!")
    }


    

    //alert(titolo + " " + autore + " " + anno + " " + url + " " + posizione);
}


}

/*

do {
    scelta = parseInt(prompt("scegli l'operazione:\n1-inserisci 2-stampa 3-cerca per titolo 4-cerca per autore 5-elimina canzone: "));
    if(scelta==1) {
        let d4 = new hitMusicale();
        
        d1.setTitolo(); d1.setAutore(); d1.setAnnoP(); lista.push(d1); console.log();
    } else if(scelta == 2) {
        for(let i=0; i<lista.length; i++){
            console.log(lista[i].getTitolo(), lista[i].getAutore(), lista[i].getAnnoP(), lista[i].getUrl, "\n");
        }
    } else if(scelta==3) {
        let ind = prompt("cerca canzone dal titolo: "); let trovato = false;
        for(let i = 0; i<lista.length; i++) {
            if(lista[i].getTitolo() == ind) {
                stampa(i);
                trovato=true;
            }
        }
        if(!trovato){
            console.log("Prodotto non trovato\n")
        }
    } else if(scelta == 5) {
        let ind = prompt("Quale prodotto vuoi cancellare? ")
        rimuovi(ind, lista);
        
    } else if(scelta == 4) {
        let aut = prompt("Ricerca per autore: ");
        for(let i = 0; i<lista.length; i++) {
            if(lista[i].getAutore() == aut) {
                stampa(i)
            }
        }
    }
} while (scelta>=1 && scelta <=5)
*/
