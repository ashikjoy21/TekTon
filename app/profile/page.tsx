"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, CreditCard, Bell } from 'lucide-react'

export default function ProfilePage() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif text-earth-800">Your Profile</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8 bg-earth-200">
          <div className="w-32 h-32 rounded-full bg-earth-400 mx-auto mb-4 flex items-center justify-center">
            <User className="w-16 h-16 text-earth-800" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-earth-800">{name}</h2>
          <p className="text-center text-earth-600">{email}</p>
        </div>
        <Tabs defaultValue="account" className="p-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-6">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <Button type="submit" className="w-full bg-earth-600 hover:bg-earth-700 text-white">
                Save Changes
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="orders" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-earth-100 rounded-lg">
                <Package className="w-8 h-8 text-earth-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-earth-800">Order #12345</h3>
                  <p className="text-sm text-earth-600">Shipped on 12 May 2023</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-earth-100 rounded-lg">
                <Package className="w-8 h-8 text-earth-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-earth-800">Order #12346</h3>
                  <p className="text-sm text-earth-600">Processing</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="payments" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-earth-100 rounded-lg">
                <CreditCard className="w-8 h-8 text-earth-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-earth-800">**** **** **** 1234</h3>
                  <p className="text-sm text-earth-600">Expires 12/2025</p>
                </div>
              </div>
              <Button className="w-full bg-earth-600 hover:bg-earth-700 text-white">
                Add New Payment Method
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="notifications" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="w-6 h-6 text-earth-600 mr-4" />
                  <span className="text-earth-800">Order updates</span>
                </div>
                <input type="checkbox" className="toggle toggle-earth" checked readOnly />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="w-6 h-6 text-earth-600 mr-4" />
                  <span className="text-earth-800">Newsletter</span>
                </div>
                <input type="checkbox" className="toggle toggle-earth" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

