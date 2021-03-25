const { gql } = require("apollo-server-express");

// Type definitions
exports.typeDefs = gql`
    type Mutation {
        addFruit(name: String!): Fruit!
        delFruit(id: ID!): Boolean
    }
        type Fruit {
            id: ID
            name: String
            purchasedOn: String
            perishes: Boolean
        }
    type Query {
        app_name: String
        fruits: [Fruit]
        deliveries: [Delivery]
        delivery(id: ID!): Delivery
        users: [User]
        user(id: ID!): User
    }
        type Delivery {
            id: ID
            record_date: String
            sender: User
            recipient: Recipient
            carrier: User
            packages: [Package]
            origin: Location
            destination: Location
            deadline: String
            status: Int
            deal: Deal
            start: String
            end: String
        }
            type User {
                id: ID
                record_date: String
                phone: Phone
                profile: Profile
                status: Int
                home: Location
                ratings: [Rating]
                verified: String
                settings: Settings
                pocket: Pocket
            }
                type Profile {
                    first_name: String
                    last_name: String
                    gender: Int
                    birth_date: String
                }

                type Rating {
                    id: ID
                    record_date: String

                    author_id: ID
                    stars: Int
                    comment: String
                }

                type Pocket {
                    saved_users: [ID]
                    saved_dlv: [ID]
                }

                type Settings {
                    set1: String
                    set2: String
                }

            type Package {
                id: ID
                record_date: String

                picurl: String
                name: String
                type: Int
                weight: Int
                dimensions: Int
                description: String
            }

            type Recipient {
                first_name: String
                last_name: String
                phone: Phone
                description: String
            }

            type Phone {
                country: String
                number: String
            }

            type Deal {
                id: ID
                record_date: String
                
                left: String
                right: String
                price: Float
                extra_fees: Float
            }

            type Location {
                map: String
                country: String
                city: String
                district: String
            }
`;
