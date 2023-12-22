export interface Icharacters {
    info:    Info;
    results: ICharacter[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface ICharacter {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export interface Location {
    name: string;
    url:  string;
}