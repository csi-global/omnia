"use client"

import L from 'leaflet'
import { useCallback, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom marker icons
const createCustomIcon = (color: string, size: number = 25) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 12px;
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

type Location = {
  id: string
  name: string
  city: string
  address: string
  phoneDisplay: string
  phoneHref: string
  email: string
  coordinates: [number, number] // [lat, lng] for Leaflet
  country: string
}

// Your actual office locations with real coordinates
const OFFICE_LOCATIONS: Location[] = [
  {
    id: 'uk-leeds',
    name: 'Leeds',
    city: 'Leeds',
    address: '2 Wellington Place, Leeds, West Yorkshire, LS1 4AP, United Kingdom',
    phoneDisplay: '+44-1133 662035',
    phoneHref: 'tel:+441133662035',
    email: 'info@omniaservices.co.uk',
    coordinates: [53.7957, -1.5615], // [lat, lng] for Leaflet
    country: 'United Kingdom'
  },
  {
    id: 'india-hyderabad',
    name: 'Hyderabad',
    city: 'Hyderabad',
    address: 'Omnia IT Services Pvt Ltd, 6th floor, GMR Aero Tower 2, International Airport, Shamshabad, Aerocity, Hyderabad, Telangana 500108, India',
    phoneDisplay: '+91 4069753002',
    phoneHref: 'tel:+914069753002',
    email: 'info@omniaservices.in',
    coordinates: [17.2403, 78.4294], // [lat, lng] for Leaflet
    country: 'India'
  }
]

// Component to handle map view changes
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap()

  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 1 })
  }, [map, center, zoom])

  return null
}

export default function LeafletWorldMap() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]) // Default world center
  const [zoomLevel, setZoomLevel] = useState(2) // World view zoom
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMarkerClick = useCallback((location: Location) => {
    setSelectedLocation(location)
    // Zoom to street level for the selected location
    setMapCenter(location.coordinates)
    setZoomLevel(18) // Street level zoom
  }, [])

  const handleMarkerHover = useCallback((location: Location | null) => {
    setHoveredLocation(location)
  }, [])

  const resetMapView = useCallback(() => {
    setMapCenter([20, 0]) // World center
    setZoomLevel(2) // World view
    setSelectedLocation(null)
  }, [])

  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 2, 20))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 2, 1))
  }, [])

  // Don't render on server side to avoid hydration issues
  if (!isLoaded) {
    return (
      <section className="leaflet-world-map-section section-padding bg-light">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading map...</span>
            </div>
            <p className="mt-3 text-muted">Loading interactive map...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="leaflet-world-map-section section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-5">
              <h2>Our Global Presence</h2>
              <p className="lead">Locations ({OFFICE_LOCATIONS.length})</p>
              <p className="text-muted">Click on any location to zoom in and explore at street level</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="world-map-container position-relative bg-white rounded shadow-sm overflow-hidden">
              {/* Leaflet Map */}
              <div className="leaflet-map-wrapper" style={{ height: '600px' }}>
                <MapContainer
                  center={mapCenter}
                  zoom={zoomLevel}
                  style={{ height: '100%', width: '100%' }}
                  zoomControl={false} // We'll use custom controls
                  scrollWheelZoom={true}
                  doubleClickZoom={true}
                  dragging={true}
                >
                  <ChangeView center={mapCenter} zoom={zoomLevel} />

                  {/* Tile Layer - Using OpenStreetMap for better street details */}
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Office location markers */}
                  {OFFICE_LOCATIONS.map((location) => {
                    const isSelected = selectedLocation?.id === location.id
                    const isHovered = hoveredLocation?.id === location.id

                    return (
                      <Marker
                        key={location.id}
                        position={location.coordinates}
                        icon={createCustomIcon(isSelected ? '#dc3545' : '#28a745', isHovered ? 30 : 25)}
                        eventHandlers={{
                          click: () => handleMarkerClick(location),
                          mouseover: () => handleMarkerHover(location),
                          mouseout: () => handleMarkerHover(null),
                        }}
                      >
                        <Popup className="custom-popup">
                          <div className="p-2">
                            <h6 className="mb-2 text-primary">{location.name}</h6>
                            <p className="text-muted small mb-2">{location.country}</p>
                            <p className="small mb-3">{location.address}</p>
                            <div className="d-flex gap-2 flex-wrap">
                              <a
                                href={location.phoneHref}
                                className="btn btn-outline-primary btn-sm"
                              >
                                <i className="fas fa-phone me-1"></i>
                                Call
                              </a>
                              <a
                                href={`mailto:${location.email}`}
                                className="btn btn-outline-secondary btn-sm"
                              >
                                <i className="fas fa-envelope me-1"></i>
                                Email
                              </a>
                            </div>
                            <p className="text-success small mt-2 mb-0">
                              <i className="fas fa-search-plus me-1"></i>
                              Click marker for street view
                            </p>
                          </div>
                        </Popup>
                      </Marker>
                    )
                  })}
                </MapContainer>

                {/* Hover popup */}
                {hoveredLocation && (
                  <div
                    className="position-absolute bg-white border rounded shadow-lg p-3"
                    style={{
                      top: '20px',
                      left: '20px',
                      zIndex: 1000,
                      minWidth: '220px',
                      pointerEvents: 'none'
                    }}
                  >
                    <h6 className="mb-1 text-primary">{hoveredLocation.name}</h6>
                    <p className="text-muted small mb-2">{hoveredLocation.country}</p>
                    <p className="text-success small mb-0">
                      <i className="fas fa-search-plus me-1"></i>
                      Click for street-level zoom
                    </p>
                  </div>
                )}

                {/* Custom Map Controls */}
                <div className="map-controls position-absolute" style={{ top: '20px', right: '20px', zIndex: 1000 }}>
                  <div className="btn-group-vertical shadow-sm">
                    <button
                      className="btn btn-light btn-sm"
                      style={{ borderBottom: 'none', borderRadius: '8px 8px 0 0' }}
                      onClick={handleZoomIn}
                      title="Zoom In"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                    <button
                      className="btn btn-light btn-sm"
                      style={{ borderBottom: 'none' }}
                      onClick={handleZoomOut}
                      title="Zoom Out"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <button
                      className="btn btn-light btn-sm"
                      style={{ borderRadius: '0 0 8px 8px' }}
                      onClick={resetMapView}
                      title="Reset to World View"
                    >
                      <i className="fas fa-globe"></i>
                    </button>
                  </div>
                </div>

                {/* Map Legend */}
                <div className="map-legend position-absolute" style={{ bottom: '20px', left: '20px', zIndex: 1000 }}>
                  <div className="bg-white rounded shadow-sm p-3">
                    <h6 className="mb-2">
                      <i className="fas fa-info-circle text-primary me-2"></i>
                      Legend
                    </h6>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <div className="circle" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28a745' }}></div>
                      <small>Office Location</small>
                    </div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <div className="circle" style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#dc3545' }}></div>
                      <small>Selected Location</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <small className="text-muted">
                        <i className="fas fa-hand-pointer me-1"></i>
                        Click markers to zoom
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="row mt-4">
            <div className="col-12">
              <div className="selected-location-details bg-primary text-white rounded p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4 className="mb-2">
                      <i className="fas fa-map-marker-alt me-2"></i>
                      {selectedLocation.name} Office
                    </h4>
                    <p className="mb-2">{selectedLocation.country}</p>
                    <p className="mb-0">{selectedLocation.address}</p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <div className="d-flex flex-column gap-2">
                      <a
                        href={selectedLocation.phoneHref}
                        className="btn btn-light btn-sm"
                      >
                        <i className="fas fa-phone me-2"></i>
                        {selectedLocation.phoneDisplay}
                      </a>
                      <a
                        href={`mailto:${selectedLocation.email}`}
                        className="btn btn-outline-light btn-sm"
                      >
                        <i className="fas fa-envelope me-2"></i>
                        Send Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Locations Grid */}
        <div className="row mt-5">
          <div className="col-12">
            <h4 className="mb-4 text-center">
              <i className="fas fa-building text-primary me-2"></i>
              All Our Offices
            </h4>
          </div>
          {OFFICE_LOCATIONS.map((location) => (
            <div key={location.id} className="col-lg-6 mb-4">
              <div
                className={`location-card h-100 p-4 border rounded shadow-sm transition-all ${selectedLocation?.id === location.id ? 'border-primary shadow-lg' : ''
                  }`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleMarkerClick(location)}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="location-icon">
                    <div className={`rounded-circle p-2 ${selectedLocation?.id === location.id ? 'bg-primary' : 'bg-light'}`}>
                      <i className={`fas fa-map-marker-alt ${selectedLocation?.id === location.id ? 'text-white' : 'text-primary'}`}></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{location.city}</h6>
                    <p className="text-muted small mb-2">{location.country}</p>
                    <p className="text-muted small mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                      {location.address.length > 80
                        ? `${location.address.substring(0, 80)}...`
                        : location.address
                      }
                    </p>
                    <div className="d-flex gap-2 flex-wrap">
                      <a
                        href={location.phoneHref}
                        className="btn btn-outline-primary btn-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-phone me-1"></i>
                        Call
                      </a>
                      <a
                        href={`mailto:${location.email}`}
                        className="btn btn-outline-secondary btn-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-envelope me-1"></i>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .location-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        }

        .leaflet-map-wrapper {
          user-select: none;
          position: relative;
        }

        .leaflet-map-wrapper .leaflet-container {
          z-index: 1;
        }

        .zoom-indicator {
          transition: all 0.3s ease;
        }

        .map-controls {
          z-index: 1000 !important;
        }

        .map-legend {
          z-index: 1000 !important;
        }

        /* Custom Leaflet popup styling */
        :global(.custom-popup .leaflet-popup-content-wrapper) {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        :global(.custom-popup .leaflet-popup-content) {
          margin: 0;
          padding: 0;
        }

        /* Custom marker styling */
        :global(.custom-div-icon) {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </section>
  )
}
