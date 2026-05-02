'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  incident: z.string().min(10, 'Please provide more details'),
  location: z.string().min(2, 'Location is required'),
  date: z.string().min(1, 'Date is required'),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { title: 'Personal Info', fields: ['name', 'email'] },
  { title: 'Incident Details', fields: ['incident', 'location', 'date'] },
  { title: 'Review & Submit', fields: [] },
];

export default function ReportForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-cream p-8 rounded-lg border border-ink/20">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center ${
                index <= currentStep ? 'text-rust' : 'text-ink/40'
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>
        <div className="w-full bg-ink/20 rounded-full h-2">
          <div
            className="bg-rust h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 0 && (
          <div className="space-y-4">
            <div>
              <label className="block text-ink font-semibold mb-2">Name</label>
              <input
                {...register('name')}
                className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-rust text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-ink font-semibold mb-2">Email</label>
              <input
                {...register('email')}
                type="email"
                className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-rust text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-ink font-semibold mb-2">Incident Description</label>
              <textarea
                {...register('incident')}
                rows={4}
                className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                placeholder="Describe the incident in detail..."
              />
              {errors.incident && <p className="text-rust text-sm mt-1">{errors.incident.message}</p>}
            </div>
            <div>
              <label className="block text-ink font-semibold mb-2">Location</label>
              <input
                {...register('location')}
                className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
                placeholder="City, State/Country"
              />
              {errors.location && <p className="text-rust text-sm mt-1">{errors.location.message}</p>}
            </div>
            <div>
              <label className="block text-ink font-semibold mb-2">Date of Incident</label>
              <input
                {...register('date')}
                type="date"
                className="w-full p-3 border border-ink/20 rounded-lg focus:border-rust focus:outline-none"
              />
              {errors.date && <p className="text-rust text-sm mt-1">{errors.date.message}</p>}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-ink">Review Your Report</h3>
            <div className="bg-ink/5 p-4 rounded-lg">
              <p><strong>Name:</strong> {watch('name')}</p>
              <p><strong>Email:</strong> {watch('email')}</p>
              <p><strong>Location:</strong> {watch('location')}</p>
              <p><strong>Date:</strong> {watch('date')}</p>
              <p><strong>Incident:</strong> {watch('incident')}</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-ink text-ink rounded-lg hover:bg-ink hover:text-cream transition-colors"
            >
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-rust text-cream rounded-lg hover:bg-rust/90 transition-colors ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-rust text-cream rounded-lg hover:bg-rust/90 transition-colors ml-auto"
            >
              Submit Report
            </button>
          )}
        </div>
      </form>
    </div>
  );
}