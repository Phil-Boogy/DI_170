import psycopg2

try:
    conn = psycopg2.connect(
        host="localhost",
        database="postgres",  # or "public" if you created that database
        user="philipjosolowitz",
        password=""
    )
    print("Connection successful!")
    conn.close()


    # Get a cursor - like the pgAdmin query tool
    cursor = connection.cursor()

    # Define your query
    query = "SELECT * FROM customer LIMIT 20;"

    # Execute the query
    cursor.execute(query)

    # Fetch results into Python memory (list of results)
    results = cursor.fetchall()

    # Print results (optional - to see what you got)
    for row in results:
        print(row)

    # Close the connection
    connection.close()

except Exception as e:
    print(f"Error: {e}")