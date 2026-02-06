(function() {
    const DATA = {
        brand: "Axisform & Company",
        owner: "Fatih Yildiz",
        email: "info@axisfrm.shop",
        phone: "+90 545 574 57 54",
        phoneClean: "+905455745754",
        address: "Ankara, Cankaya, Istiklal Cd. No: 48",
        copyright: "(c) 2026 Axisform & Company. All Rights Reserved."
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