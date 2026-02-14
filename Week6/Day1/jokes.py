import requests
import json
import sqlite3
from faker import Faker
from time import time

def create_jokes_table():
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()
    
    query = """
    CREATE TABLE IF NOT EXISTS jokes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        joke TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
    
    cursor.execute(query)
    connection.commit()
    connection.close()
    print("Jokes table created successfully")

def get_jokes(n):
    for i in range(n):
        print(i + 1)
        url = 'https://api.chucknorris.io/jokes/random'
        data = requests.get(url)
        data = data.json()
        joke = data['value']
        joke = joke.replace("'", "")
        connection = sqlite3.connect('jokes.db')
        cursor = connection.cursor()
        query = f"INSERT INTO jokes (joke) VALUES ('{joke}');"
        query_result = cursor.execute(query)
        connection.commit()
        connection.close()

def gen_fake_data(n):
    start = time()
    f = Faker()
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()
    for i in range(n):
        print(i + 1)
        name = f.name()
        query = f"INSERT INTO jokes (joke) VALUES ('{name}');"
        query_result = cursor.execute(query)
    connection.commit()
    connection.close()
    end = time()
    print(f"The function ran in {round(end-start,2)}s")

def view_jokes():
    connection = sqlite3.connect('jokes.db')
    cursor = connection.cursor()
    
    query = "SELECT * FROM jokes;"
    cursor.execute(query)
    results = cursor.fetchall()
    
    connection.close()
    
    if results:
        print(f"\n{'='*80}")
        print(f"Total jokes in database: {len(results)}")
        print(f"{'='*80}\n")
        
        for row in results:
            joke_id = row[0]
            joke_text = row[1]
            created_at = row[2]
            print(f"ID: {joke_id}")
            print(f"Joke: {joke_text}")
            print(f"Created: {created_at}")
            print("-" * 80)
    else:
        print("No jokes found in the database.")

# Call this first to set up your database
# create_jokes_table()
# get_jokes(5)
view_jokes()