import { HfInference } from '@huggingface/inference';
const inference = new HfInference(process.env.MY_TOKEN);


const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')
const input = document.getElementById('user-input');
const generateImg = document.getElementById('display-image'); 

dialogModal.show()

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  dialogModal.close();
  await generateImageFromText(input.value);
});

async function generateImageFromText(textInput) {
  try {
    const result = await inference.textToImage({
      model: 'stabilityai/stable-diffusion-2',
      inputs: textInput,
      parameters: {
        negative_prompt: 'blurry',
      },
    });

    const imageUrl = await blobToBase(result);
    generateImg.src = imageUrl;
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

async function blobToBase(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
} 

