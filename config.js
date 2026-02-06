(function() {
    const DATA = {
        brand: "Axisform Creative",
        owner: "Ali Sahin",
        email: "info@axisform.shop",
        phone: "+90 556 921 44 02",
        phoneClean: "+905569214402",
        address: "Ankara, Kecioren, Cumhuriyet Cd. No: 87",
        copyright: "(c) 2026 Axisform Creative. All Rights Reserved."
    };

    function apply() {
        document.title = DATA.brand;
        
        const map = {
            'page-title': DATA.brand,
            'brand-logo': DATA.brand,
            'brand-name': DATA.brand,
            'footer-brand': DATA.brand,
            'owner-name': DATA.owner,
            'contact-email': DATA.email,
            'contact-phone': DATA.phone,
            'footer-addr': DATA.address,
            'footer-copy': DATA.copyright
        };
        
        for (const [id, val] of Object.entries(map)) {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
            document.querySelectorAll('.' + id).forEach(e => e.textContent = val);
        }
        
        document.querySelectorAll('.sitename').forEach(el => el.textContent = DATA.brand);
        document.querySelectorAll('.contact-email').forEach(el => el.textContent = DATA.email);
        document.querySelectorAll('.contact-phone').forEach(el => el.textContent = DATA.phone);
        document.querySelectorAll('.footer-addr').forEach(el => el.textContent = DATA.address);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
})();