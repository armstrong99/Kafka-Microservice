## To Start The App

- Start the kafka broker with the below terminal:
```SHELL
bash kafka.sh
```

- To start the **User** Service

    - `cd user && yarn && yarn start:debug` 
    - In `src/HttpTest` run the request to create sign in, get the Bearer/Auth Token and use it to book your flight. But make sure to  start the **Flight** service.

- To start the **Flight** Service

   - `cd flight && yarn && yarn start:debug`
   - When someone books a flight you should get a message on the console.