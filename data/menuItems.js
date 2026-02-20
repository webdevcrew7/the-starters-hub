// Real menu data for The Starters Hub
// Categories: non-veg, prawns, pakodas, veg

const IMG = {
    chicken1: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    chicken2: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    chicken3: "https://images.unsplash.com/photo-1527477396000-e27163b868f2?auto=format&fit=crop&w=600&q=80",
    manchurian: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
    drumstick: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    springroll: "https://images.unsplash.com/photo-1565299585323-38d68c8e848d?auto=format&fit=crop&w=600&q=80",
    egg: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80",
    prawns: "https://images.unsplash.com/photo-1565680018093-ebb6b9e3a605?auto=format&fit=crop&w=600&q=80",
    pakoda: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80",
    fish: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    fries: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=600&q=80",
    paneer: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80",
    mushroom: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    veg: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    corn: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
};

export const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "non-veg", label: "Non-Veg Starters" },
    { id: "prawns", label: "Prawns" },
    { id: "pakodas", label: "Pakodas" },
    { id: "veg", label: "Veg Starters" },
];

export const MENU_ITEMS = [
    // ── Non-Veg Starters ──
    { id: 1, name: "Chicken Shangrila", price: 260, category: "non-veg", isVeg: false, image: IMG.chicken1 },
    { id: 2, name: "Chilli Chicken", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken2 },
    { id: 3, name: "Chicken 65", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken1 },
    { id: 4, name: "Chicken Manchurian", price: 240, category: "non-veg", isVeg: false, image: IMG.manchurian },
    { id: 5, name: "Chicken Majestic", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken3 },
    { id: 6, name: "Chicken 555", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken2 },
    { id: 7, name: "Dragon Chicken", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken1 },
    { id: 8, name: "Loose Chicken", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken3 },
    { id: 9, name: "Garlic Chicken", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken2 },
    { id: 10, name: "Lemon Chicken", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken1 },
    { id: 11, name: "Chicken Lolipop (4 pc)", price: 250, category: "non-veg", isVeg: false, image: IMG.drumstick },
    { id: 12, name: "Chicken Drumsticks (4 pc)", price: 250, category: "non-veg", isVeg: false, image: IMG.drumstick },
    { id: 13, name: "Crispy Chicken Strips", price: 240, category: "non-veg", isVeg: false, image: IMG.chicken3 },
    { id: 14, name: "Chicken Spring Roll", price: 240, category: "non-veg", isVeg: false, image: IMG.springroll },
    { id: 15, name: "Chilli Egg", price: 180, category: "non-veg", isVeg: false, image: IMG.egg },
    { id: 16, name: "Egg 65", price: 180, category: "non-veg", isVeg: false, image: IMG.egg },
    { id: 17, name: "Egg Manchuria", price: 190, category: "non-veg", isVeg: false, image: IMG.manchurian },

    // ── Prawns ──
    { id: 18, name: "Chilli Prawns", price: 290, category: "prawns", isVeg: false, image: IMG.prawns },
    { id: 19, name: "Loose Prawns", price: 290, category: "prawns", isVeg: false, image: IMG.prawns },
    { id: 20, name: "Garlic Prawns", price: 290, category: "prawns", isVeg: false, image: IMG.prawns },

    // ── Veg & Non-Veg Pakodas ──
    { id: 21, name: "Chicken Pakoda (200 g)", price: 170, category: "pakodas", isVeg: false, image: IMG.pakoda },
    { id: 22, name: "Kaju Chicken Pakoda (230 g)", price: 210, category: "pakodas", isVeg: false, image: IMG.pakoda },
    { id: 23, name: "Chicken Liver Pakoda (200 g)", price: 150, category: "pakodas", isVeg: false, image: IMG.pakoda },
    { id: 24, name: "Chicken Lolipop (4 pc)", price: 160, category: "pakodas", isVeg: false, image: IMG.drumstick },
    { id: 25, name: "Prawns Pakoda", price: 290, category: "pakodas", isVeg: false, image: IMG.prawns },
    { id: 26, name: "Fish Pakoda", price: 290, category: "pakodas", isVeg: false, image: IMG.fish },
    { id: 27, name: "Mushroom Pakoda", price: 190, category: "pakodas", isVeg: true, image: IMG.mushroom },
    { id: 28, name: "Paneer Pakoda", price: 210, category: "pakodas", isVeg: true, image: IMG.paneer },
    { id: 29, name: "French Fries", price: 100, category: "pakodas", isVeg: true, image: IMG.fries },
    { id: 30, name: "Peri Peri Fries", price: 140, category: "pakodas", isVeg: true, image: IMG.fries },

    // ── Veg Starters ──
    { id: 31, name: "Veg Manchuria", price: 190, category: "veg", isVeg: true, image: IMG.manchurian },
    { id: 32, name: "Veg Shangrila", price: 210, category: "veg", isVeg: true, image: IMG.veg },
    { id: 33, name: "Crispy Corn", price: 190, category: "veg", isVeg: true, image: IMG.corn },
    { id: 34, name: "Salt & Pepper Mushroom", price: 190, category: "veg", isVeg: true, image: IMG.mushroom },
    { id: 35, name: "Chilli Mushroom", price: 190, category: "veg", isVeg: true, image: IMG.mushroom },
    { id: 36, name: "Mushroom 65", price: 190, category: "veg", isVeg: true, image: IMG.mushroom },
    { id: 37, name: "Mushroom Manchuria", price: 190, category: "veg", isVeg: true, image: IMG.manchurian },
    { id: 38, name: "Chilli Paneer", price: 210, category: "veg", isVeg: true, image: IMG.paneer },
    { id: 39, name: "Paneer Manchurian", price: 210, category: "veg", isVeg: true, image: IMG.paneer },
    { id: 40, name: "Veg Spring Roll", price: 190, category: "veg", isVeg: true, image: IMG.springroll },
    { id: 41, name: "Baby Corn Manchuria", price: 190, category: "veg", isVeg: true, image: IMG.corn },
    { id: 42, name: "Crispy Baby Corn", price: 190, category: "veg", isVeg: true, image: IMG.corn },
];
