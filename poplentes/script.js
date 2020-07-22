const htmls = {
    one : `
            <div class="row">
                <div class="selecciones">
                    <div class="icon-wrap">
                        <div class="icon">
                            <i class="fas fa-eye"></i>
                        </div>
                    </div>

                    <label>Poder</label>
                        <select name="poder">
                            <option>Selecciona una opcion</option>
                            <option>+0.50</option>
                            <option>+0.75</option>
                            <option>+1.00</option>
                            <option>+1.25</option>
                            <option>+1.50</option>
                            <option>+1.75</option>
                            <option>+2.00</option>
                        </select>
                    <label>Cilindro</label>
                        <select name="poder">
                            <option>Selecciona una opcion</option>
                            <option>-0.75</option>
                            <option>-1.25</option>
                            <option>-1.75</option>
                            <option>-2.25</option>
                            <option>-2.75</option>
                        </select>
                    <label>Eje</label>
                        <select name="poder">
                            <option>Selecciona una opcion</option>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                        </select>
                </div>
            </div>    
    `,
    two : `
            <div class="row">
                <div class="selecciones">
                    <div class="icon-wrap">
                        <div class="icon">
                            <h1>L</h1>
                        </div>
                    </div>
            
                    <label>Poder</label>
                    <select name="poder">
                        <option>Selecciona una opcion</option>
                        <option>+0.50</option>
                        <option>+0.75</option>
                        <option>+1.00</option>
                        <option>+1.25</option>
                        <option>+1.50</option>
                        <option>+1.75</option>
                        <option>+2.00</option>
                    </select>
                    <label>Cilindro</label>
                    <select name="poder">
                        <option>Selecciona una opcion</option>
                        <option>-0.75</option>
                        <option>-1.25</option>
                        <option>-1.75</option>
                        <option>-2.25</option>
                        <option>-2.75</option>
                    </select>
                    <label>Eje</label>
                    <select name="poder">
                        <option>Selecciona una opcion</option>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                        <option>60</option>
                        <option>70</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="selecciones">
                    <div class="icon-wrap">
                        <div class="icon">
                            <h1>R</h1>
                        </div>
                    </div>
            
                    <label>Poder</label>
                    <select name="poder">
                        <option>Selecciona una opcion</option>
                        <option>+0.50</option>
                        <option>+0.75</option>
                        <option>+1.00</option>
                        <option>+1.25</option>
                        <option>+1.50</option>
                        <option>+1.75</option>
                        <option>+2.00</option>
                    </select>
                    <label>Cilindro</label>
                    <select name="poder">
                        <option>Selecciona una opcion</option>
                        <option>-0.75</option>
                        <option>-1.25</option>
                        <option>-1.75</option>
                        <option>-2.25</option>
                        <option>-2.75</option>
                    </select>
                    <label>Eje</label>
                    <select name="poder">
                        <option>Selecciona una opcion</option>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                        <option>60</option>
                        <option>70</option>
                    </select>
                </div>
            </div>
    `
}

function loadContent(version){

    const content = document.getElementById("content");

    version === 1 ? 
        content.innerHTML = htmls.one :
        content.innerHTML = htmls.two ;
}

function gradDisplay(){

    const selector = document.getElementById("selector");

    selector.checked ? loadContent(2) : loadContent(1);

}