document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load__iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.4942973556112!2d-76.99677683117442!3d-12.18350749351172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9cf982ddaa3%3A0xf741278dea9ceaf2!2sEstudio%20Contable%20Santa%20Rosa!5e0!3m2!1sen!2spe!4v1693924332297!5m2!1sen!2spe" ></iframe>              
        `
    },500);

})