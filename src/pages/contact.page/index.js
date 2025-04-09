import "../../styles/scss/contact.scss"

function Contact() {
    return (
        <>
            <div className="container">
                <div className="contact">
                    <div className="row">
                        <div className="col-6">
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.2530720350237!2d105.77134871075536!3d21.072075286208587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134552defbed8e9%3A0x1584f79c805eb017!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBN4buPIC0gxJDhu4thIGNo4bqldA!5e1!3m2!1svi!2s!4v1744204664484!5m2!1svi!2s" style={{width:"100%", height:"430px"}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="contact__form">
                                <div className="contact__form-title">Liên hệ với chúng tôi:</div>
                                <form>
                                    <input placeholder="Họ và tên *" type="text" />
                                    <input placeholder="Số điện thoại *" type="text" />
                                    <input placeholder="Tiêu đề *" type="text" />
                                    <textarea rows="6" placeholder="Nội dung *" />
                                    <button>Gửi yêu cầu</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;