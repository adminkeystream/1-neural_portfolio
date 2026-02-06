(function() {
    const DATA = {
        brand: "Brand Name",
        owner: "Owner Name",
        email: "info@example.com",
        phone: "+1 234 567 890",
        phoneClean: "+1234567890",
        address: "Address",
        copyright: "© 2026 Brand Name. All Rights Reserved."
    };

    function apply() {
        document.title = DATA.brand;
        
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
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();
