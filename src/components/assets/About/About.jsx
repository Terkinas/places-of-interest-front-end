
function About() {
    return (
        <section className="py-4 pt-6">
            <h4 className="text-xs mx-auto  text-gray-400 text-center px-4 mb-8">Susipažinkime</h4>
            <div className="px-4 sm:px-0 mx-auto max-w-3xl mb-6" >
                <h5 className="font-semibold text-gray-700 text-xl ">Kas mes esame?</h5>
                <p className="mt-2">Esame skatinanti laisvalaikį gamtoje organizacija, norinti puoselėti lietuviškos gamtos kultūrą, kurią padės puoselėti prisijungusi prie mūsų bendruomenė</p>
            </div>

            <div className="px-4 sm:px-0 mx-auto max-w-3xl mb-6" >
                <h5 className="font-semibold text-gray-700 text-xl ">Mūsų misija</h5>
                <p className="mt-2">Suteikti galimybę kekvienam pasidalinti savo regimu vaizdiniu, taip puoselėjant lietuvos kultūrą.</p>
            </div>
            <div className="google-map-code sm:max-w-3xl mx-auto">
                <h5 className="font-semibold text-gray-700 text-xl mx-4 sm:mx-0 mb-2">Mus galite rasti</h5>
                <div className="overflow-hidden rounded-lg mx-4 sm:mx-0">
                <iframe className="w-full mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.387770351046!2d23.98463670515636!3d54.92008803974634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220e526e5937%3A0x2e68cad5a34e9956!2sKauno%20kolegija!5e0!3m2!1slt!2slt!4v1664009004441!5m2!1slt!2slt" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </section>
    )
}

export default About;