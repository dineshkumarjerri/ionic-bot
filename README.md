## Vision              
     TODO 
## USP                 
  Helps in giving customized suggestions based on the specific data sets captured above
## App Users           
various carers/family members
## Limitations of POC  
- Hackathon version exclueds dynamic questioning to update profile 
- only existing information + question by user factored into advice
# Assumptions        
 Patient profile already exists

## Vitual Nurse Profile (this we can use to set intent of the agent - defining responsibilities of the agent)
- I am a virtual nurse for dementia and my name is xxxx
- I am an AI-assistant, trained to provide help for care takers of patients with dementia
- It is my job help relatives and carers by providing advice, support and comfort
- I am patient, empthaic and always considerate to provide the carers a trusted and supporting presence.
- My functions are targeted to provide the best posssible support tailored to the specific patient in care

## Data needed for APP 

### User Profile 
- care taker name and contacts
- care taker to patient link
### Patient Profile
- Personal Details 
  - Name
  - Age
  - Fotos + Text (how to add foto of patient) - could
  - Occupation + work details -- future feature
- Day to Day routing (recurring activities, habits/patterns) 
  - Sleeping
  - Eating
  - Further routine input
- Medical History
  - Type of dementia
  - Diagnosis(symptoms)
  - Hospital/Clinic name & contacts
  - Other diseases
- Patient Specific Profile
  - Accept feedback on situational advice

## Tasks
### Features to consier in UI
- tabs
  - home
  - resourse library (Provide access to educational articles, videos, and support groups related to dementia care. Integrate with credible sources like Alzheimer's Association or other relevant        organizations )
  - care giver network -- Facilitate communication and collaboration between family members, friends, and professional caregivers through a secure messaging platform or group chat.
  - Settings 
- Chatbot model integration
  - clearing conversation history in ui
  - when to clear and start a new session
  - shall we give an option to clear existing conversation and start a new one? 
- Home/landing page 
  - Patient personal profile page along with family
  - Patient Medical Details Page
  - point of contacts page
  - Appointment management icon to add reminders
  - maps tile to always navigate to home
  - journal tile
- User profile page
- Burger menu
- Notification icon

- option to take feed back from user on situtation and write back to agent
- can we build/integrate data upload back to agent data store?
### Vision  -- Julia, Amit, Nagaraja
### Data Preparation -- we should build as much data as we can
  - patient profile
    - personal, habits, family members  and thier details
    - medical
      - type of dementia/symptoms - can we build a data over a period of like 2 to 3 years
      - what kind of treatments are taken and taking
      - what medicines are taking
      - how many time a day
      - when to refill
      - What kind of activities helped him/her to get better in he past (can we put some examples)
      - can we get in contact with organizers to get some near to real time scenarios/stories with which we can build better data(they mentioned some nurses/doctors will be available)
  - Generic data set
  - Taker Carer data set
### Tech/Tools
#### Agent/Chatbot
- create agent
  - Set the intent of the agent (instructions)
  - How to make it responsible AI
  - set temperature and other settings
  - how to enable conversation history and what are the benefits of it? how is it used?
  - how to train agent based on data?  how to optimize fine tune our agent?
  - how to take feed back from user?
  - how to do sentimental analysis (we want our bot to make difference between what is happy and waht is sad)
  - if we upload new data how/when the agent will be(trained) ready to answer on new data?
- data store
  - what are the best practices to upload/build data store (can we label based on data category - generic, based on patient name(unique id))
  - build/upload data for agent -- text ? pdf? spread sheets?
  - how to have images also uploaded ? (we can use this option to display point of contacts or family members)
  - How can we write data into data store(given the capability for the user to upload any doc or data) 

    

