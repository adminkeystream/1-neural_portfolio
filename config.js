(function() {
    const DATA = {
        brand: "Digital Studio",
        owner: "Owner Name",
        email: "info@example.com",
        phone: "+1 234 567 890",
        phoneClean: "+1234567890",
        address: "Address City",
        copyright: "(c) 2026 Digital Studio. All Rights Reserved."
    };

    function apply() {
        if(document.title) document.title = DATA.brand;
        
        const ids = {
            'page-title': DATA.brand,
            'brand-logo': DATA.brand,
            'brand-name': DATA.brand,
            'footer-brand': DATA.brand,
            'owner-name': DATA.owner,
            'hero-author': DATA.owner,
            'contact-email': DATA.email,
            'contact-email-2': DATA.email,
            'contact-phone': DATA.phone,
            'contact-phone-2': DATA.phone,
            'footer-addr': DATA.address,
            'footer-addr-2': DATA.address,
            'footer-copy': DATA.copyright
        };
        
        for (const [id, value] of Object.entries(ids)) {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
            document.querySelectorAll('.' + id).forEach(e => e.textContent = value);
        }
        
        document.querySelectorAll('.sitename').forEach(el => {
            el.textContent = DATA.brand;
            if(el.setAttribute) el.setAttribute('data-text', DATA.brand);
        });
        
        document.querySelectorAll('.contact-email').forEach(el => {
            el.textContent = DATA.email;
        });
        
        document.querySelectorAll('.contact-phone').forEach(el => {
            el.textContent = DATA.phone;
        });
        
        document.querySelectorAll('.footer-addr').forEach(el => {
            el.textContent = DATA.address;
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
