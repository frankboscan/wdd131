const examples = [
    {
        id: 'ex1',
        example: 'x^2 + 5x + 6',
        solution: '(x+2)(x+3)'
    },
    {
        id: 'ex2',
        example: 'x^2 + 6x + 9',
        solution: '(x+3)^2'
    },
    {
        id: 'ex3',
        example: 'a x^2 + b x',
        solution: 'x (a x + b)'
    }
];

function renderExercises() {
    const container = document.getElementById('exercises-container');
    if (!container) return;

    examples.forEach(ex => {
        const section = document.createElement('section');
        section.id = ex.id;
        
        const exampleP = document.createElement('p');
        exampleP.textContent = `Exemple: \\( ${ex.example} \\)`;
        
        const button = document.createElement('button');
        button.textContent = 'Afficher/Masquer Solution';
        button.addEventListener('click', () => toggleSolution(ex.id));
        
        const solutionP = document.createElement('p');
        solutionP.classList.add('solution');
        solutionP.style.display = 'none';
        solutionP.textContent = `Solution: \\( ${ex.solution} \\)`;
        
        section.appendChild(exampleP);
        section.appendChild(button);
        section.appendChild(solutionP);
        
        container.appendChild(section);
    });
    
    loadStates();
    MathJax.typesetPromise();
}

function toggleSolution(id) {
    const sol = document.querySelector(`#${id} .solution`);
    if (sol) {
        if (sol.style.display === 'none' || sol.style.display === '') {
            sol.style.display = 'block';
        } else {
            sol.style.display = 'none';
        }
        saveState(id, sol.style.display);
    }
}

function saveState(id, state) {
    localStorage.setItem(`solution_${id}`, state);
}

function loadStates() {
    examples.forEach(ex => {
        const state = localStorage.getItem(`solution_${ex.id}`);
        if (state) {
            const sol = document.querySelector(`#${ex.id} .solution`);
            if (sol) sol.style.display = state;
        }
    });
}
