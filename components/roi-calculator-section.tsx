"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface CalculationResult {
  estimatedSavings: number
  installationCost: number
  paybackPeriod: number
}

export function RoiCalculatorSection() {
  const [electricityBill, setElectricityBill] = useState("")
  const [location, setLocation] = useState("")
  const [roofType, setRoofType] = useState("")
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculateRoi = () => {
    const monthlyBill = parseInt(electricityBill)
    if (isNaN(monthlyBill) || monthlyBill <= 0) {
      setResult(null)
      return
    }

    // 1. Estimated Annual Savings
    // Assuming solar covers 90% of electricity needs
    const estimatedAnnualSavings = monthlyBill * 12 * 0.9

    // 2. Estimated Installation Cost
    const avgElectricityRate = 0.17 // $/kWh (US average)
    const annualConsumptionKwh = (monthlyBill * 12) / avgElectricityRate
    const systemProductionNeededKwh = annualConsumptionKwh * 0.9

    const avgSystemProductionPerKw = 1500 // kWh/year/kW (average for US)
    const systemSizeKw = systemProductionNeededKwh / avgSystemProductionPerKw

    const costPerKw = 3000 // $/kW
    let roofTypeMultiplier = 1.0
    if (roofType.toLowerCase().includes("metal")) {
      roofTypeMultiplier = 1.1
    } else if (roofType.toLowerCase().includes("tile")) {
      roofTypeMultiplier = 1.2
    }

    const grossInstallationCost = systemSizeKw * costPerKw * roofTypeMultiplier

    // Apply 30% federal tax credit
    const federalTaxCredit = 0.3
    const netInstallationCost = grossInstallationCost * (1 - federalTaxCredit)

    // 3. Payback Period
    const paybackPeriod = netInstallationCost / estimatedAnnualSavings

    setResult({
      estimatedSavings: estimatedAnnualSavings,
      installationCost: netInstallationCost,
      paybackPeriod: paybackPeriod,
    })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ROI Calculator</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
            Estimate your return on investment with our simple calculator.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Savings</CardTitle>
              <CardDescription>Enter your details to get an estimate.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="electricity-bill">Monthly Electricity Bill ($)</Label>
                  <Input
                    id="electricity-bill"
                    placeholder="e.g. 150"
                    value={electricityBill}
                    onChange={(e) => setElectricityBill(e.target.value)}
                    type="number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. San Francisco, CA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="roof-type">Roof Type</Label>
                  <Input
                    id="roof-type"
                    placeholder="e.g. Asphalt Shingle"
                    value={roofType}
                    onChange={(e) => setRoofType(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={calculateRoi}>
                  Calculate
                </Button>
              </div>
            </CardContent>
          </Card>
          {result && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Estimated Annual Savings</p>
                    <p className="text-2xl font-bold">${result.estimatedSavings.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="font-medium">Estimated Installation Cost</p>
                    <p className="text-2xl font-bold">${result.installationCost.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="font-medium">Payback Period</p>
                    <p className="text-2xl font-bold">{result.paybackPeriod.toFixed(2)} years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
