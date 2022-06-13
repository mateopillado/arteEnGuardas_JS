const materiales = [
    {color:'Blanco',
    codigo:'A11',
    img:'img_prod/clasica/A11.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'43'},

    {color:'Gris',
    codigo:'A22',
    img:'img_prod/clasica/A22.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'58'},
    
    {color:'Celeste Claro',
    codigo:'A30',
    img:'img_prod/clasica/A30.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'53'},

    {color:'Celeste Oscuro',
    codigo:'A31',
    img:'img_prod/clasica/A31.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'98'},

    {color:'Celeste Intermedio',
    codigo:'A32',
    img:'img_prod/clasica/A32.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'23'},

    {color:'Azul Francia',
    codigo:'A35',
    img:'img_prod/clasica/A35.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'10'},

    {color:'Azul Cobalto',
    codigo:'A37',
    img:'img_prod/clasica/A37.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'8'},

    {color:'Verde Agua Marina',
    codigo:'A40',
    img:'img_prod/clasica/A40.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'43'},

    {color:'Verde Musgo',
    codigo:'A42',
    img:'img_prod/clasica/A42.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'33'},

    {color:'Verde Claro',
    codigo:'A47',
    img:'img_prod/clasica/A47.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'73'},

    {color:'Negro',
    codigo:'A50',
    img:'img_prod/clasica/A50.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'51'},

    {color:'Rojo',
    codigo:'A90',
    img:'img_prod/clasica/A90.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'87'},

    {color:'Naranja',
    codigo:'A93',
    img:'img_prod/clasica/A93.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'45'},
    
    {color:'Mezcla Celestes',
    codigo:'MIX111',
    img:'img_prod/clasica/MIX111.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'53'},
    
    {color:'Mezcla Celestes Y Blancos',
    codigo:'MIX112',
    img:'img_prod/clasica/MIX112.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'23'},

    {color:'Mezcla Verdes Y Agua Marina',
    codigo:'MIX113',
    img:'img_prod/clasica/MIX113.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'15'},

    {color:'Mezcla Beiges',
    codigo:'MIX130',
    img:'img_prod/clasica/MIX130.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'37'},
    
    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/clasica/MIX150.png',
    linea:'Comun',
    proveedor:'Holstein',
    cant:'83'},

    //molauf

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-025-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'45'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-026-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'12'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-027-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'87'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-028-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'54'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-029-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'42'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-030-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'21'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-031-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'45'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-032-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'27'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-037-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'73'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-052-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'93'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-053-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'72'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-060-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'25'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-122-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'73'},

    {color:'Mezcla Grises, Blancos Y Negros',
    codigo:'MIX150',
    img:'img_prod/premium/HVZ-138-Niebla.png',
    linea:'Premium',
    proveedor:'Molauf',
    cant:'98'},
]
