const d = document;
const habilidades = ["vuejs","html", "css", "javaScript", "git", "github", "bootstrap", "c", "mysql", "php", "python", "flask"];
const proyectos = [
    {
        enlace: "https://naughty-bhabha-b5dd6a.netlify.app/",
        titulo: "Buscador de usuarios",
        imagen: "buscador",
        descripcion: "Este proyecto consiste en el consumo de una API de usuarios que pintamos en el DOM, ademas podemos filtrar los usuarios en funcion de su nombre",
        tags: ["html", "css", "javascript"],
        github: "https://github.com/isaacFierrog/filtroBusqueda"
    }
]

const evaluarFormulario = () => {
    d.addEventListener("keyup", e => {
        const regEx = new RegExp(e.target.getAttribute("pattern"), "i");
        
        if(e.target.value)
            (regEx.test(e.target.value))
                ? e.target.classList.add("form__input--incorrecto")
                : e.target.classList.remove("form__input--incorrecto")
    });
};

const cargarProyectos = selecLista => {
    const $seccion = d.querySelector(selecLista),
        $template = d.getElementById("proyecto-template").content,
        $fragment = d.createDocumentFragment();

    proyectos.forEach(proyecto => {
        $template.querySelector(".proyecto__enlace").setAttribute("href", proyecto.enlace);
        $template.querySelector(".proyecto__titulo").textContent = proyecto.titulo;
        $template.querySelector(".proyecto__imagen").setAttribute("src", `./assets/img/proyectos/${proyecto.imagen}.png`);
        $template.querySelector(".proyecto__imagen").setAttribute("alt", proyecto.imagen);
        $template.querySelector(".proyecto__descripcion").textContent = proyecto.descripcion;
        $template.querySelector(".proyecto__github").setAttribute("href", proyecto.github);
        const $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $seccion.appendChild($fragment);
};

const cargarImagenes = selecLista => {
    const $seccion = d.querySelector(selecLista),
        $template = d.getElementById("habilidad-template").content,
        $fragment = d.createDocumentFragment();

    habilidades.forEach(habilidad => {
        $template.querySelector(".habilidad__imagen").setAttribute("src", `./assets/img/${habilidad}.png`);
        $template.querySelector(".habilidad__imagen").setAttribute("alt", habilidad);
        $template.querySelector(".habilidad__imagen").setAttribute("loading", "lazy");
        $template.querySelector(".habilidad__titulo").textContent = habilidad.toUpperCase();
        const $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $seccion.appendChild($fragment);
};


d.addEventListener("DOMContentLoaded", e => {
    cargarImagenes(".lista");
    cargarProyectos(".portafolio__lista");
    evaluarFormulario();
});