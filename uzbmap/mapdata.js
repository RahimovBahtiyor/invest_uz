var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    UZAN: {
      name: "Andijon",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Green",
      hover_color: "Green",
      url: "default"
    },
    UZBU: {
      name: "Bukhoro",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "#FF0000",
      hover_color: "#FF0000",
      url: "default"
    },
    UZFA: {
      name: "Ferghana",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Green",
      hover_color: "Green",
      url: "default"
    },
     UZJI: {
       name: "Jizzakh",
       description: "16 - 18 yoshgacha: 10000 <br> institut: 6", // Line break here
       color: "yellow",
       hover_color: "dark yellow",
       url: "default"
     },
    UZNG: {
      name: "Namangan",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Green",
      hover_color: "90EE90",
      url: "default"
    },
    UZNW: {
      name: "Navoi",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "#FF0000",
      hover_color: "#FF0000",
      url: "default"
    },
    UZQA: {
      name: "Kashkadarya",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "#8B0000",
      hover_color: "#FF0000",
      url: "default"
    },
    UZQR: {
      name: "Karakalpakstan",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Light Red",
      hover_color: "Light Red",
      url: "default"
    },
    UZSA: {
      name: "Samarkand",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "90EE90",
      hover_color: "90EE90",
      url: "default"
    },
    UZSI: {
      name: "Sirdaryo",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "yellow",
      hover_color: "yellow",
      url: "default"
    },
    UZSU: {
      name: "Surkhandarya",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Light Red",
      hover_color: "Light Red",
      url: "default"
    },
    UZTK: {
      name: "Tashkent",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Green",
      hover_color: "Green",
      url: "default"
    },
    UZTO: {
      name: "Tashkent",
      description: "16 - 18 yoshgacha: 10000 <br> institut: 6",
      color: "Green",
      hover_color: "Green",
      url: "default"
    },
    UZXO: {
      name: "Khorezm",
      description: "default",
      color: "Light Red",
      hover_color: "Light Red",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Tashkent",
      lat: "41.316667",
      lng: "69.25"
    }
  },
  labels: {
    UZAN: {
      name: "Andijon",
      parent_id: "UZAN"
    },
    UZBU: {
      name: "Bukhoro",
      parent_id: "UZBU"
    },
    UZFA: {
      name: "Ferghana",
      parent_id: "UZFA"
    },
    UZJI: {
      name: "Jizzakh",
      parent_id: "UZJI"
    },
    UZNG: {
      name: "Namangan",
      parent_id: "UZNG"
    },
    UZNW: {
      name: "Navoi",
      parent_id: "UZNW"
    },
    UZQA: {
      name: "Kashkadarya",
      parent_id: "UZQA"
    },
    UZQR: {
      name: "Karakalpakstan",
      parent_id: "UZQR"
    },
    UZSA: {
      name: "Samarkand",
      parent_id: "UZSA"
    },
    UZSI: {
      name: "Sirdaryo",
      parent_id: "UZSI"
    },
    UZSU: {
      name: "Surkhandarya",
      parent_id: "UZSU"
    },
    UZTK: {
      name: "Tashkent",
      parent_id: "UZTK"
    },
    UZTO: {
      name: "Tashkent",
      parent_id: "UZTO"
    },
    UZXO: {
      name: "Khorezm",
      parent_id: "UZXO"
    }
  }
};
