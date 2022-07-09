# Graphql Service

# Installation instructions

1. Clone the repository to your local machine
2. Run `npm i` to install all the dependencies
3. There are two modes (development and production) to run the app:
  - Run `npm run start` to start the app in the production mode
  - Run `npm run start:dev` to start the app in the development mode
4. After starting the app, Apollo Server will be running on port 4000 configured in the `.env` file.
5. Go to Apollo Studio website:
6. Enter `http://localhost:4000/` as the Apollo Server in the Sandbox field and run GraphQL queries as shown in the screenshot below:

[![Apollo Studio](https://raw.githubusercontent.com/mlatysheva/node-graphql-microservices/develop/ScreenshotApolloStudio.png)]
7. Remeber first to register the user, using `register()` mutation
8. Then obtain the JWT token for the user, using `jwt()` query
9. In every query/mutation that is available to a registered user, remember to enter the JWT token into the `Headers` section, field `Authorisation` as show below (without quotes): `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYTc4NTlkYTg1N2ViYWE0YzY0ODUiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU3MzY2Mjg2fQ.Jwz06PyFfk5MZbDsWMBPewpAlz4qvg5TxRQRwtR_eh8`

[![Apollo Studio Token](https://raw.githubusercontent.com/mlatysheva/node-graphql-microservices/develop/ScreenshotToken.png)]

## Description

We have several microservices created for the service Musicify, a new wikipedia of Music. 
In this app we provide a comfortable and convenient service for our users to manage and retrieve data for different entities.

The repository with microservices is stored [here](https://github.com/rolling-scopes-school/node-graphql-service).
The instructions to install and run the microservices are provided in the readme.md file of the microservices repository.

The following entities exist:

```typescript
interface Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[]
    instruments: string[];
}
```

```typescript
interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}
```

```typescript
interface Band {
    _id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}
```

```typescript
interface Genre {
    _id: string;
    name: string;
    description: string;
    country: string;
    year: string;
}
```

```typescript
interface Track {
    _id: string;
    title: string;  
    albumId: string;
    artistsIds: string[];
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}
```

```typescript
interface Album {
    _id: string;
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    trackIds: string[];
    genresIds: string[];
    image: string;
}
```

```typescript
interface Favorite {
    _id: string;
    userId: string;
    bandsIds: string[];
    genresIds: string[];
    artistsIds: string[];
    tracksIds: string[];
}
```

**Details:**

1. For each entity there is a separate microservice, you can find all microservices in corresponding repositories:

    - Artists service
    - Users service
    - Bands service
    - Genres service
    - Tracks service
    - Favourites service
    - Albums service

Instructions on how to launch can be found in readme.md file of the corresponding service.

2. The Following types are created:

```graphql
type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [String]
    instruments: [String]
}

```
```graphql
type Band {
    id: ID!
    name: String
    origin: String
    members: [String]
    website: String
    genres: [String]
}

```
```graphql
type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

```
```graphql
type Favourites {
    id: ID!
    userId: ID
    bands: [String]
    genres: [String]
    artists: [String]
    tracks: [String]
}
```
```graphql
type Album {
    id: ID!
    name: String
    released: Int
    artists: [String]
    bands: [String]
    tracks: [String]
    genres: [String]
    image: String
}
```
```graphql
type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
}
```
```graphql
type Track {
    id: ID!
    title: String!
    album: Album
    artists: [String]
    bands: [String]
    duration: Int
    released: Int
    genres: [String]
}
```
3. The following queries are created:

- artist - returns an artist by ID
- artists - returns all artists
- genre - returns a genre by ID
- genres - returns all genres
- track - returns a track by ID
- tracks - returns all tracks
- band - returns a band by ID
- bands - returns all bands
- album - returns an album by ID
- albums - returns all albums
- jwt - logins the user and returns his/her token
- user - registers the user
- favourites (available only for logged in user) - returns the object with the user's favourite artists, genres, tracks and bands

The following mutations are created:

- Artists
  - createArtist
  - deleteArtist
  - updateArtist
- Genres
  - createGenre
  - deleteGenre
  - updateGenre
- Bands
  - createBand
  - deleteBand
  - updateBand
- Tracks
  - createTrack
  - deleteTrack
  - updateTrack
- Albums
  - createAlbum
  - deleteAlbum
  - updateAlbum
- Users
  - register
- Favourites
  - addTrackToFavourites
  - addBandToFavourites
  - addArtistToFavourites
  - addGenreToFavourites

**Mutation requests are available only for logged in users. (except Users.register)**

4. Service port us configured through env variable.

5. Each entity has a separate module.

```
- app
    -modules
        - bands
        - artists
        - tracks
        - genres
        - favourites
        - ...
```