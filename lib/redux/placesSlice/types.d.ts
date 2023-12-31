// Generated by https://quicktype.io

interface Observation {
    speciesCode:     string;
    comName:         string;
    sciName:         string;
    locId:           string;
    locName:         string;
    obsDt:           string;
    howMany:         number;
    lat:             number;
    lng:             number;
    obsValid:        boolean;
    obsReviewed:     boolean;
    locationPrivate: boolean;
    subId:           string;
}

// Generated by https://quicktype.io

interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_en:       string;
    place_name_en: string;
    text:          string;
    place_name:    string;
    text_es:       string;
    place_name_es: string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

interface Context {
    id:           string;
    mapbox_id:    string;
    text_en:      string;
    text:         string;
    text_es:      string;
    wikidata?:    string;
    short_code?:  string;
    language_en?: Language;
    language?:    Language;
    language_es?: LanguageEs;
}

enum Language {
    En = "en",
}

enum LanguageEs {
    Es = "es",
}

interface Geometry {
    coordinates: number[];
    type:        string;
}

interface Properties {
    foursquare: string;
    landmark:   boolean;
    address?:   string;
    category:   string;
}