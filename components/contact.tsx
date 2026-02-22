'use client'

import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send, Globe } from 'lucide-react'
import { SiTelegram, SiMessenger, SiDiscord, SiLinkedin } from 'react-icons/si'

export function Contact({ locale, t }: { locale: string; t: (key: string) => string }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isMessageMenuOpen, setIsMessageMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${t('owner.email')}?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`
  }

  const handleCall = () => {
    window.location.href = `tel:${t('owner.phone')}`
  }


  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            {locale === 'vi'
              ? 'Liên hệ ngay để bắt đầu dự án của bạn'
              : 'Get in touch to start your project'}
          </p>
        </div>

        {/* Contact Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Call Me Button */}
          <button
            onClick={handleCall}
            className="group p-8 rounded-xl bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-200 border-2 border-green-700 dark:border-green-500"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-green-700 dark:bg-green-700 rounded-full group-hover:scale-110 transition-transform duration-200">
                <Phone size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {locale === 'vi' ? 'Gọi Cho Tôi' : 'Call Me'}
                </h3>
                <p className="text-white font-semibold">{t('owner.phone')}</p>
              </div>
            </div>
          </button>

          {/* Message Button with Radial Menu */}
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => setIsMessageMenuOpen(!isMessageMenuOpen)}
              className="group p-8 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-200 border-2 border-blue-700 dark:border-blue-500 relative z-10 w-full"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-blue-700 dark:bg-blue-700 rounded-full group-hover:scale-110 transition-transform duration-200">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {locale === 'vi' ? 'Nhắn Tin' : 'Message'}
                  </h3>
                  <p className="text-white">{locale === 'vi' ? 'Chọn kênh liên hệ' : 'Choose contact channel'}</p>
                </div>
              </div>
            </button>

            {/* Radial Contact Options */}
            {isMessageMenuOpen && (
              <>
                {/* Overlay to close menu when clicking outside */}
                <div
                  className="fixed inset-0 z-0"
                  onClick={() => setIsMessageMenuOpen(false)}
                />

                {/* Contact Options positioned around the button */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {/* Telegram - Top Left */}
                  <a
                    href={`https://t.me/${t('owner.telegram') || 'username'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#0088cc] hover:bg-[#0077b5] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-radial-1"
                    style={{
                      top: '-20px',
                      left: '-20px',
                    }}
                    title="Telegram"
                  >
                    <SiTelegram className="text-white" size={28} />
                  </a>

                  {/* Messenger - Top */}
                  <a
                    href={`https://m.me/${t('owner.messenger') || 'username'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#0084ff] hover:bg-[#0073e6] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-radial-2"
                    style={{
                      top: '-30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                    title="Messenger"
                  >
                    <SiMessenger className="text-white" size={28} />
                  </a>

                  {/* Discord - Top Right */}
                  <a
                    href={`https://discord.com/users/${t('owner.discord') || 'userid'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#5865F2] hover:bg-[#4752c4] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-radial-3"
                    style={{
                      top: '-20px',
                      right: '-20px',
                    }}
                    title="Discord"
                  >
                    <SiDiscord className="text-white" size={28} />
                  </a>

                  {/* Email - Bottom Left */}
                  <a
                    href={`mailto:${t('owner.email')}`}
                    className="absolute pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#EA4335] hover:bg-[#d33426] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-radial-4"
                    style={{
                      bottom: '-20px',
                      left: '-20px',
                    }}
                    title="Email"
                  >
                    <Mail className="text-white" size={28} />
                  </a>

                  {/* Website - Bottom */}
                  <a
                    href={t('owner.website') || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#10B981] hover:bg-[#059669] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-radial-5"
                    style={{
                      bottom: '-30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                    title="Website"
                  >
                    <Globe className="text-white" size={28} />
                  </a>

                  {/* LinkedIn - Bottom Right */}
                  <a
                    href={`https://linkedin.com/in/${t('owner.linkedin') || 'username'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#0A66C2] hover:bg-[#004182] rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-radial-6"
                    style={{
                      bottom: '-20px',
                      right: '-20px',
                    }}
                    title="LinkedIn"
                  >
                    <SiLinkedin className="text-white" size={28} />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Contact Form with Email */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 dark:bg-blue-600 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{locale === 'vi' ? 'Gửi Email' : 'Send Email'}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{t('owner.email')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                  placeholder={locale === 'vi' ? 'Tên của bạn' : 'Your name'}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors resize-none"
                  placeholder={locale === 'vi' ? 'Mô tả dự án của bạn...' : 'Describe your project...'}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

