import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi';

export default function SocialIcons() {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/nasirnaeem50" target="_blank" className="bg-[#334155] hover:bg-[#4338ca] text-white p-3 rounded-full transition-colors">
        <FiGithub className="text-lg" />
      </a>
      <a href="#" className="bg-[#334155] hover:bg-[#4338ca] text-white p-3 rounded-full transition-colors">
        <FiTwitter className="text-lg" />
      </a>
      <a href="#" className="bg-[#334155] hover:bg-[#4338ca] text-white p-3 rounded-full transition-colors">
        <FiLinkedin className="text-lg" />
      </a>
      <a href="#" className="bg-[#334155] hover:bg-[#4338ca] text-white p-3 rounded-full transition-colors">
        <FiDribbble className="text-lg" />
      </a>
    </div>
  );
}