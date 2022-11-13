const ContactForm = () => {
    function backToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openMail(e: any) {
        e.preventDefault();

        var target = e.target;
        var to = 'tomas.dornicak@seznam.cz';
        var uri = 'mailto:' + to;
        var body = e.target['content'].value;

        if(!target) {
            return;
        }

        // Set Form Values to Variables
        var name = e.target['name'].value
        var subject = "Nova zprava od " + name;
        var phone = e.target['phone'].value
        var message = e.target['content'].value

        // Build Body / Message with all Input Fields
        body += message + "\r\n\r\n";
        body += "Name: " + name + "\r\n";
        body += "Phone Number: " + phone + "\r\n";

        // Build final Mailto URI
        uri += '?subject=' + encodeURIComponent(subject);
        uri += '&body=' + encodeURIComponent(body);

        // Open Mailto in New Window / Tab
        window.open(uri,'_blank');
    }

    return (
      <section className="bg-[#f2eadc]">
          <div className="grid grid-cols-2 w-[1100px] ml-auto mr-auto">
            <span>&nbsp;</span>

            <div className="float-right text-right">
              <button onClick={backToTop} className="bg-[#857E71] opacity-70 text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>

          <h1 className="text-[#857E71] text-center text-4xl mt-10">Kontaktujte mě</h1>

          <form onSubmit={openMail} action="/" className="mt-3 mb-20 w-[500px] mr-auto ml-auto text-center outline-none">
            <input 
                type="text"
                name="name"
                className="bg-[#857E71] placeholder-[#f2eadc] border-white outline-none border-solid border-3 w-[300px] text-white p-2 mt-5"
                placeholder="Váš email"
            />

            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="bg-[#857E71] placeholder-[#f2eadc] border-white outline-none border-solid border-3 w-[300px] text-white p-2 mt-5"
                placeholder="Vaše telefonní číslo"
            />
            <br/>

            <textarea 
                name="content"
                cols={4}
                className="bg-[#857E71] placeholder-[#f2eadc] border-white outline-none border-solid border-3 w-[300px] text-white p-2 mt-5"
                placeholder="Zpráva"
            />
            <br />

            <button 
                type="submit" 
                className="mt-4 hover:cursor-pointer hover:opacity-90 ml-3 bg-[#857E71] text-[#f2eadc] h-[40px] w-[90px]">
                    Odeslat
            </button>
          </form>

          <span className="h-30 w-full">&nbsp;</span>
      </section>
    )
}

export default ContactForm