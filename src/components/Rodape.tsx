import Icon from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

export default function Rodape() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="flex justify-center items-center gap-16"> 
        <p>&copy; 2024 Seu Site. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
            <div className="flex justify-center gap-1">
                <Icon path={mdiInstagram} size={1} />
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Instagram</a>
            </div>
            <div className="flex justify-center gap-1">
                <Icon path={mdiTwitter} size={1} />
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Twitter</a>
            </div>
            <div className="flex justify-center gap-1">
                <Icon path={mdiFacebook} size={1} />
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">Facebook</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
