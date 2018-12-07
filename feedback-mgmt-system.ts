interface Event {
    name: string;
    eventDate: Date;
    venue: string;
    attendees: Attendee[];
    sponsorships: Sponsorship[];
    organizer: Organizer[];
}

interface Organizer {
    companyName: string;
    committee: Committee[];
}

interface Committee {
    name: string;
    role: string;
    age: number;
    identityNo: string;
    gender: Gender;
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
    TOYOTA,
}

interface Sponsor {
    companyName: string;
    picName: string;
}

interface Attendee {
    name: string;
    profession: string;
    age: number;
    identityNo: string;
    gender: Gender;
    feedback?: Feedback;
}

interface Feedback {
    comment: string;
    rating: number;
}

enum Gender {
    MALE,
    FEMALE,
}

interface NonVip extends Attendee {
    role: Role;

}

enum Role {
    PARTICIPANT,
    PUBLIC,
}

interface Vip extends Attendee {
    title: Title;
}

enum Title {
    DATUK,
    DATIN,
    PROFESSOR,
}