# YMBs

A simple top rated Movies and Series website, still under construction

## Setup

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/igorbattaglion/ybms.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments (development or production)

1.  In the root this repository you will find a file named `.env.example`
2.  The `.env.example` file is configured to use [themoviedb](https://www.themoviedb.org/) API Keys
3.  Create a new file by copying and pasting the file and then renaming it to just `.env`
4.  The file `.env` is already ignored, so you never commit your credentials.
5.  Change the values of the file to your environment

## How to run

Use the following command to run in development mode:

```bash
npm start   or
yarn start
```

By default the server will run in `http://localhost:3001`

## Information

Read more about [themoviedb API](https://www.themoviedb.org/documentation/api) 

