import sqlite3
def main(income): 
    monthly_income_after_tax = calculate_after_tax(income) #define income from front end!!! 
    monthly_income = calculate_monthly_income(monthly_income_after_tax)
    rec_rent, rec_food, rec_car, rec_loans, rec_insurance, rec_internet, rec_clothes, rec_entertainment, rec_vacation, rec_emergency, rec_savings, rec_pocket = calculate_categories(monthly_income) #send to front end 

    conn = sqlite3.connect('your_database.db')
    cursor = conn.cursor()
    delete_query = "DELETE FROM expenses"
    cursor.execute(delete_query)

    # Create the 'expenses' table if it doesn't exist
    create_table_query = """
        CREATE TABLE IF NOT EXISTS expenses (
            rec_rent REAL,
            rec_food REAL,
            rec_car REAL,
            rec_loans REAL,
            rec_insurance REAL,
            rec_internet REAL,
            rec_clothes REAL,
            rec_entertainment REAL,
            rec_vacation REAL,
            rec_emergency REAL,
            rec_savings REAL,
            rec_pocket REAL
        )
    """
    cursor.execute(create_table_query)

    # Execute an SQL INSERT statement to insert the calculated values into the 'expenses' table
    insert_query = """
        INSERT INTO expenses (rec_rent, rec_food, rec_car, rec_loans, rec_insurance, rec_internet, rec_clothes, rec_entertainment, rec_vacation, rec_emergency, rec_savings, rec_pocket)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    cursor.execute(insert_query, (rec_rent, rec_food, rec_car, rec_loans, rec_insurance, rec_internet, rec_clothes, rec_entertainment, rec_vacation, rec_emergency, rec_savings, rec_pocket))

    # Commit the transaction to save changes to the database
    conn.commit()
    cursor.execute("SELECT * FROM expenses")
    rows = cursor.fetchall()
    print("Number of rows fetched:", len(rows))
    for row in rows:
        print("rec_rent:", row[0])
        print("rec_food:", row[1])
        print("rec_car:", row[2])
        print("rec_loans:", row[3])
        print("rec_insurance:", row[4])
        print("rec_internet:", row[5])
        print("rec_clothes:", row[6])
        print("rec_entertainment:", row[7])
        print("rec_vacation:", row[8])
        print("rec_emergency:", row[9])
        print("rec_savings:", row[10])
        print("rec_pocket:", row[11])
        print() 
    conn.close()

def calculate_after_tax(income): 
    if (income <= 12000): 
        tax_rate = .1 
    elif (12000 < income <= 47000):
        tax_rate = .12
    elif (47000 < income <= 100525):
        tax_rate = .22 
    elif (100525 < income <= 192000):
        tax_rate = .24 
    elif (192000 < income <= 244000):
        tax_rate = .32 
    elif (244000 < income <= 610000):
        tax_rate = .35
    elif (610000 < income):
        tax_rate = .37 
    after_tax_income = income * (1 - tax_rate) 
    return after_tax_income

#monthly_income_after_tax = calculate_after_tax(60000) #define income from front end!!! 

def calculate_monthly_income(income):
    monthly_income = income / 12
    return monthly_income 

#monthly_income = calculate_monthly_income(monthly_income_after_tax)
def calculate_categories(monthly_income): 
    rent_ratio = .3
    rec_rent = rent_ratio * monthly_income
    food_ratio = .11
    rec_food = food_ratio * monthly_income
    car_ratio = .16 
    rec_car = car_ratio * monthly_income 
    loans_ratio = .1
    rec_loans = loans_ratio * monthly_income
    insurance_ratio = .14
    rec_insurance = insurance_ratio * monthly_income
    internet_ratio = .02 
    rec_internet = internet_ratio * monthly_income
    clothes_ratio = .04 
    rec_clothes = clothes_ratio * monthly_income 
    entertainment_ratio = .015 
    rec_entertainment = entertainment_ratio * monthly_income 
    vacation_ratio = .05 
    rec_vacation = vacation_ratio * monthly_income 
    emergency_ratio = .02
    rec_emergency = emergency_ratio * monthly_income 
    savings_ratio = .015 
    rec_savings = savings_ratio * monthly_income 
    pocket_ratio = .03 
    rec_pocket = pocket_ratio * monthly_income 
    return rec_rent, rec_food, rec_car, rec_loans, rec_insurance, rec_internet, rec_clothes, rec_entertainment, rec_vacation, rec_emergency, rec_savings, rec_pocket
if __name__ == "__main__":
    main(60000) #make sure to get income input from front end user input 
