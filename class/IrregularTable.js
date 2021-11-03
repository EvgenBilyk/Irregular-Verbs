class IrregularTable {
    constructor(iregular, start, end, out, idBlock) {
        this.iregular = iregular;
        this.start = start;
        this.end = end;
        this.out = out;
        this.idBlock = idBlock;
    }

    con() {
        console.log(this)
    }


    render() {
        let accordionItem = '';



        for (let i = this.start; i < this.end; i++) {
            accordionItem += `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${i}">
                <button class="accordion-button collapsed bgGreenThree" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                    ${this.iregular[i][0]}
                </button>
            </h2>
            <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}"
                data-bs-parent="#${this.idBlock}">
                <div class="accordion-body">
                    <div class="p-3 mb-2 bgGreenOne text-white">${this.iregular[i][1]}</div>
                    <div class="p-3 mb-2 bgGreenOne text-white">${this.iregular[i][2]}</div>
                    <div class="p-3 mb-2 bgGreenOne text-white">${this.iregular[i][3]}</div>
                </div>
            </div>
        </div>
            `;
        }

        let accordion = ` 
        <div class="accordion mt-4 mb-2" id="${this.idBlock}">
                ${accordionItem}
        </div>               
        `;

        document.querySelector(this.out).classList.toggle('hide');
        document.querySelector(this.out).innerHTML = accordion;
    }
}