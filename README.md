# dall-e_clone
Full stack DALL-E (OpenAI image generation) Clone

## SCREEN SHOTS
![screencapture-localhost-3000-2023-02-15-08_59_38](https://user-images.githubusercontent.com/61433385/218955472-632e7b16-3e8c-46b4-9934-d7295aff5972.png)
![screencapture-localhost-3000-generate-2023-02-15-09_00_07](https://user-images.githubusercontent.com/61433385/218955495-eccb74e1-2b0a-4c16-a1c8-bfad95814a3f.png)
![screencapture-localhost-3000-about-us-2023-02-15-09_00_13](https://user-images.githubusercontent.com/61433385/218955501-5ade48b3-3b9c-4a7a-bb8f-c4aaae2cee38.png)

## NOTES
1. Get your own openai api key
2. signup on MongoBD Atlas
3. signup on Cloudniary
4. Add your own .env file in the server root directory
```
// .env example
// in MONGODB_URL in the password replace the special characters with the % sign and its ascii code as: "%ASCII_CODE"
MONGODB_URL="mongodb+srv://<userName>:<password>@cluster0.glpccgu.mongodb.net/?retryWrites=true&w=majority"

OPENAI_API_KEY="YOUR API KEY"

CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

```
