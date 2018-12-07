interface Event {
    name: string;
    venue: string
    eventDate: Date;
    noAttendees: number;
    attendees: Attendees[];
    sponsorships?: Sponsorship[];
    feedback: Feedback[];
}

interface Sponsorship {
    sponsor: Sponsor;
    type: SponsorshipType;
    amountSponsored: number;
}

enum SponsorshipType {
    PLATINUM,
    GOLD,
    SILVER,
    CROWDFUNDING,
    SELFSPONSOR
}

interface Sponsor {
    companyName: string;
    picName: string;
}

interface Attendees {
    name: string;
    age?: number;
    profession: string;
    gender: Gender;
    typeattendees?: TypeAttendees;
}


enum Gender {
    FEMALE,
    MALE
}

interface TypeAttendees {
    title: Title;
    guest: Guest;
}

enum Title {
    DATO,
    DATOSERI,
    DATIN,
    DATINSERI,
    PUAN,
    TUAN,
    YB
}

enum Guest {
    HOST,
    SPEAKER,
    VIP,
    PARTICIPANTS,
    ARTIST
}

interface Feedback {
    description: Description;
    comment: string;
    rating: number;
}

interface Organizer extends Sponsor {
    noCommittees: number;
}



