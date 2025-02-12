import schedule
import time
from twilio.rest import Client

# Twilio Account Credentials (Replace with your actual credentials)
ACCOUNT_SID = "AC394ce697012fd129c3f1d767f2e2cc59"
AUTH_TOKEN = "a36891eed0f553286576c22fc52fd963"
TWILIO_PHONE_NUMBER = "+15075545255"
MY_PHONE_NUMBER = "+919325937758"

# Initialize Twilio Client
client = Client(ACCOUNT_SID, AUTH_TOKEN)

def send_sms():
    """Function to send an SMS reminder."""
    message = client.messages.create(
        body="""Hello! Pratik Pawar, how are you today?
        This message is generated to remind you to bring your medicine to school.
        Have a good day.""",
        from_=TWILIO_PHONE_NUMBER,
        to=MY_PHONE_NUMBER
    )
    print(f"SMS Sent! Message SID: {message.sid}")

def make_call():
    """Function to make a reminder call."""
    call = client.calls.create(
        twiml="""<Response><Say>Hello! Pratik Pawar, how are you today?
        This message is generated to remind you to bring your medicine to school.
        Have a good day.</Say></Response>""",
        from_=TWILIO_PHONE_NUMBER,
        to=MY_PHONE_NUMBER
    )
    print("Call initiated! Call SID:", call.sid)

# Schedule both SMS and Call at the same time (Every day at 8:30 AM)
schedule.every().day.at("23:47").do(send_sms)
schedule.every().day.at("23:47").do(make_call)

print("Scheduler started. Waiting for scheduled time...")

# Keep the script running
while True:
    schedule.run_pending()
    time.sleep(60)  # Check every 60 seconds
