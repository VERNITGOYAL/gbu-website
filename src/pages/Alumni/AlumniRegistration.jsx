import { useState } from 'react';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';

import { Upload, CheckCircle , AlertCircle} from 'lucide-react';
import { toast } from '../../hooks/use-toast';

const AlumniRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    graduationYear: '',
    branch: '',
    linkedinProfile: '',
    currentJobTitle: '',
    company: '',
    location: '',
    bio: '',
    availableForReferrals: false,
    availableForResumeReview: false,
    availableForMentoring: false,
    degreeProof: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({ ...prev, degreeProof: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.graduationYear || !formData.branch) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      toast({
        title: "Registration submitted!",
        description: "Your application is under review. You'll be notified once approved.",
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="text-center">
            <CardContent className="pt-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for registering! Your application is now under review by our admin team.
                You'll receive an email notification once your profile is approved and added to the alumni directory.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-blue-800 text-sm space-y-1 text-left">
                  <li>• Admin verification of your degree proof and details</li>
                  <li>• Email confirmation once approved (typically 1-2 business days)</li>
                  <li>• Access to update your availability and profile settings</li>
                  <li>• Inclusion in the searchable alumni directory</li>
                </ul>
              </div>
              <Button onClick={() => window.location.href = '/alumni-network'} className="bg-blue-600 hover:bg-blue-700">
                Browse Alumni Network
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">

      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Alumni Network</h1>
          <p className="text-xl md:text-2xl mb-8">
            Connect with fellow graduates and help current students succeed in their careers.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Alumni Registration Form</CardTitle>
            <p className="text-gray-600">
              Please fill out this form to join our alumni directory. All fields marked with * are required.
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Current Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="City, Country"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year *</Label>
                    <Select value={formData.graduationYear} onValueChange={(value) => handleInputChange('graduationYear', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select graduation year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 20 }, (_, i) => 2024 - i).map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="branch">Branch/Major *</Label>
                    <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your branch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Computer Science">Computer Science</SelectItem>
                        <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                        <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                        <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                        <SelectItem value="Data Science">Data Science</SelectItem>
                        <SelectItem value="Business Administration">Business Administration</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="degreeProof">Degree Certificate/Proof *</Label>
                  <div className="mt-2">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> your degree certificate
                        </p>
                        <p className="text-xs text-gray-500">PDF, PNG, JPG up to 5MB</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                        accept=".pdf,.png,.jpg,.jpeg"
                      />
                    </label>
                    {formData.degreeProof && (
                      <p className="mt-2 text-sm text-green-600 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {formData.degreeProof.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="currentJobTitle">Current Job Title</Label>
                    <Input
                      id="currentJobTitle"
                      value={formData.currentJobTitle}
                      onChange={(e) => handleInputChange('currentJobTitle', e.target.value)}
                      placeholder="e.g., Software Engineer"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Current Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="e.g., Google"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="linkedinProfile">LinkedIn Profile URL</Label>
                  <Input
                    id="linkedinProfile"
                    value={formData.linkedinProfile}
                    onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="mt-6">
                  <Label htmlFor="bio">Professional Bio (Optional)</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    placeholder="Brief description of your professional background and achievements..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Availability Options */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">How would you like to help current students?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="referrals"
                      checked={formData.availableForReferrals}
                      onCheckedChange={(checked) => handleInputChange('availableForReferrals', checked)}
                    />
                    <Label htmlFor="referrals" className="text-sm font-medium">
                      Available for Job Referrals
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="resumeReview"
                      checked={formData.availableForResumeReview}
                      onCheckedChange={(checked) => handleInputChange('availableForResumeReview', checked)}
                    />
                    <Label htmlFor="resumeReview" className="text-sm font-medium">
                      Available for Resume Reviews
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="mentoring"
                      checked={formData.availableForMentoring}
                      onCheckedChange={(checked) => handleInputChange('availableForMentoring', checked)}
                    />
                    <Label htmlFor="mentoring" className="text-sm font-medium">
                      Available for Career Mentoring
                    </Label>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Before submitting:</h4>
                    <ul className="mt-1 text-sm text-yellow-700 space-y-1">
                      <li>• Ensure all information is accurate and up-to-date</li>
                      <li>• Your degree certificate will be verified by our admin team</li>
                      <li>• Approval typically takes 1-2 business days</li>
                      <li>• You can update your availability preferences anytime after approval</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlumniRegistration;
