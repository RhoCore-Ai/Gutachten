
"use client";

import React, { useState } from 'react';
import { MapPinIcon } from './icons/MapPinIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich.';
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <AnimatedSection id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kontaktieren Sie uns</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Haben Sie Fragen oder möchten Sie ein Gutachten anfordern? Wir freuen uns auf Ihre Nachricht.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-sm">
            {submitted ? (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-600">Vielen Dank!</h3>
                  <p className="text-gray-700 mt-2">Ihre Nachricht wurde erfolgreich versendet. Wir werden uns in Kürze bei Ihnen melden.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#0057b7] focus:border-[#0057b7] transition-colors`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#0057b7] focus:border-[#0057b7] transition-colors`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    required 
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#0057b7] focus:border-[#0057b7] transition-colors`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-[#0057b7] text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition-colors">
                  Nachricht Senden
                </button>
              </form>
            )}
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="flex items-start gap-4">
              <MapPinIcon className="h-8 w-8 text-[#0057b7] mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Adresse</h4>
                <p className="text-gray-600">Musterstraße 123<br/>12345 Musterstadt, Deutschland</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon className="h-8 w-8 text-[#0057b7] mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Telefon</h4>
                <p className="text-gray-600">+49 (0) 123 4567890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <EnvelopeIcon className="h-8 w-8 text-[#0057b7] mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">E-Mail</h4>
                <p className="text-gray-600">info@goodmotors.de</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
